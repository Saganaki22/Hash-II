"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { Copy, Lock, Unlock, Trash2, Loader2, Eye, EyeOff, RefreshCw, Twitter, Globe, Instagram } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const { toast } = useToast()
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [mode, setMode] = useState<"encode" | "decode">("encode")
  const [useAES, setUseAES] = useState(false)
  const [password, setPassword] = useState("")
  const [salt, setSalt] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [inputStats, setInputStats] = useState({ chars: 0, bytes: 0 })
  const [outputStats, setOutputStats] = useState({ chars: 0, bytes: 0 })

  // Update stats when input or output changes
  useEffect(() => {
    setInputStats({
      chars: inputText.length,
      bytes: new Blob([inputText]).size,
    })

    setOutputStats({
      chars: outputText.length,
      bytes: new Blob([outputText]).size,
    })
  }, [inputText, outputText])

  // Process input with debounce
  const processInput = useCallback(async () => {
    if (!inputText.trim()) {
      setOutputText("")
      return
    }

    setIsProcessing(true)

    try {
      // Add small delay for loading effect
      await new Promise((resolve) => setTimeout(resolve, 300))

      let result = ""

      if (mode === "encode") {
        if (useAES) {
          if (!password) {
            setOutputText("Please enter a password for encryption.")
            setIsProcessing(false)
            return
          }

          try {
            // Encrypt with AES
            const encrypted = await encryptAES(inputText, password, salt || "defaultSalt")

            // Store whether a salt was used during encryption
            const encryptedData = {
              ciphertext: encrypted,
              algorithm: "AES-256",
              usedSalt: !!salt, // Boolean flag only - no actual salt stored
            }

            result = encodeBase64(JSON.stringify(encryptedData))
          } catch (error) {
            result = `Encryption error: ${error instanceof Error ? error.message : "Unknown error"}`
          }
        } else {
          result = encodeBase64(inputText)
        }
      } else {
        // decode
        try {
          if (useAES) {
            if (!password) {
              setOutputText("Please enter a password for decryption.")
              setIsProcessing(false)
              return
            }

            const decodedBase64 = decodeBase64(inputText)
            const parsedData = JSON.parse(decodedBase64)

            // Check if the encrypted data used salt
            if (parsedData.usedSalt && !salt) {
              setOutputText("This data was encrypted with a salt. Please provide the same salt for decryption.")
              setIsProcessing(false)
              return
            }

            // Use the salt from the input field or default salt if none
            const decryptSalt = salt || "defaultSalt"
            result = await decryptAES(parsedData.ciphertext, password, decryptSalt)
          } else {
            result = decodeBase64(inputText)
          }
        } catch (error) {
          result = `Error: ${error instanceof Error ? error.message : "Invalid input for decoding"}`
        }
      }

      setOutputText(result)
    } catch (error) {
      setOutputText(`Error: ${error instanceof Error ? error.message : "An error occurred during processing"}`)
    } finally {
      setIsProcessing(false)
    }
  }, [inputText, mode, useAES, password, salt])

  // Process input when dependencies change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputText) {
        processInput()
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [inputText, mode, useAES, password, salt, processInput])

  // Base64 encoding function
  function encodeBase64(str: string) {
    // UTF-8 encoding support
    return btoa(unescape(encodeURIComponent(str)))
  }

  // Base64 decoding function
  function decodeBase64(str: string) {
    // UTF-8 decoding support
    return decodeURIComponent(escape(atob(str)))
  }

  // Helper functions for Web Crypto API
  async function getKeyMaterial(password: string) {
    const encoder = new TextEncoder()
    const data = encoder.encode(password)
    return window.crypto.subtle.importKey("raw", data, { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"])
  }

  async function getKey(password: string, salt: string) {
    const keyMaterial = await getKeyMaterial(password)
    const encoder = new TextEncoder()
    const saltBuffer = encoder.encode(salt)
    return window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: saltBuffer,
        iterations: 100000,
        hash: "SHA-256",
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"],
    )
  }

  // AES encryption function using Web Crypto API
  async function encryptAES(plaintext: string, password: string, salt: string) {
    try {
      const encoder = new TextEncoder()
      const key = await getKey(password, salt)

      // Generate random IV
      const iv = window.crypto.getRandomValues(new Uint8Array(12))

      // Encrypt the data
      const ptUint8 = encoder.encode(plaintext)
      const encrypted = await window.crypto.subtle.encrypt(
        {
          name: "AES-GCM",
          iv: iv,
        },
        key,
        ptUint8,
      )

      // Convert encrypted data to base64
      const encryptedArray = new Uint8Array(encrypted)
      const encryptedBase64 = btoa(String.fromCharCode.apply(null, Array.from(encryptedArray)))

      // Convert IV to base64
      const ivBase64 = btoa(String.fromCharCode.apply(null, Array.from(iv)))

      // Return IV and encrypted data
      return JSON.stringify({
        iv: ivBase64,
        encryptedData: encryptedBase64,
      })
    } catch (error) {
      console.error("Encryption error:", error)
      throw error
    }
  }

  // AES decryption function using Web Crypto API
  async function decryptAES(ciphertext: string, password: string, salt: string) {
    try {
      const decoder = new TextDecoder()
      const key = await getKey(password, salt)

      // Parse the ciphertext
      const { iv, encryptedData } = JSON.parse(ciphertext)

      // Convert base64 IV back to Uint8Array
      const ivUint8 = new Uint8Array(
        atob(iv)
          .split("")
          .map((char) => char.charCodeAt(0)),
      )

      // Convert base64 encrypted data back to Uint8Array
      const encryptedUint8 = new Uint8Array(
        atob(encryptedData)
          .split("")
          .map((char) => char.charCodeAt(0)),
      )

      // Decrypt the data
      const decrypted = await window.crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv: ivUint8,
        },
        key,
        encryptedUint8,
      )

      // Convert decrypted data to string
      return decoder.decode(decrypted)
    } catch (error) {
      console.error("Decryption error:", error)
      return "Decryption failed. Incorrect password or salt."
    }
  }

  // Generate random salt
  function generateRandomSalt() {
    const array = new Uint8Array(16)
    window.crypto.getRandomValues(array)
    const salt = Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("")
    setSalt(salt)
  }

  // Copy to clipboard
  function copyToClipboard(text: string, type: string) {
    if (!text) {
      toast({
        title: "Nothing to copy",
        description: `The ${type} field is empty.`,
        variant: "destructive",
      })
      return
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          title: "Copied!",
          description: `${type} copied to clipboard.`,
        })
      })
      .catch(() => {
        toast({
          title: "Copy failed",
          description: "Please try again or copy manually.",
          variant: "destructive",
        })
      })
  }

  // Clear all fields
  function clearFields() {
    setInputText("")
    setOutputText("")
    setPassword("")
    setSalt("")
  }

  return (
    <div className="container py-6 md:py-10">
      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Input Panel */}
          <Card className="relative">
            <CardHeader className="pb-3">
              <CardTitle>Input</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Textarea
                  className="terminal-textarea min-h-[300px] font-mono"
                  placeholder="Enter text to encode/decode..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                  {inputStats.chars} characters | {inputStats.bytes} bytes
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Output Panel */}
          <Card className="relative">
            <CardHeader className="pb-3">
              <CardTitle>Output</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Textarea
                  className="terminal-textarea min-h-[300px] font-mono"
                  placeholder="Result will appear here..."
                  value={outputText}
                  readOnly
                />
                <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                  {outputStats.chars} characters | {outputStats.bytes} bytes
                </div>
                {isProcessing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant={mode === "encode" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setMode("encode")}
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Encode
                  </Button>
                  <Button
                    variant={mode === "decode" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setMode("decode")}
                  >
                    <Unlock className="mr-2 h-4 w-4" />
                    Decode
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm">{useAES ? "AES-256" : "Base64"}</span>
                  <Switch checked={useAES} onCheckedChange={setUseAES} />
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(outputText, "Output")}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </Button>
                  <Button variant="outline" size="sm" onClick={clearFields}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Clear
                  </Button>
                </div>
              </div>

              {useAES && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative flex">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password for encryption/decryption"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pr-16"
                      />
                      <div className="absolute right-0 top-0 h-full flex">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-full"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                        </Button>
                        {password && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-full"
                            onClick={() => copyToClipboard(password, "Password")}
                          >
                            <Copy className="h-4 w-4" />
                            <span className="sr-only">Copy password</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="salt">Salt (optional)</Label>
                      <Button type="button" variant="ghost" size="sm" onClick={generateRandomSalt} className="h-6 px-2">
                        <RefreshCw className="mr-1 h-3 w-3" />
                        Generate
                      </Button>
                    </div>
                    <div className="relative flex">
                      <Input
                        id="salt"
                        placeholder="Custom salt (optional)"
                        value={salt}
                        onChange={(e) => setSalt(e.target.value)}
                        className="pr-8"
                      />
                      {salt && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full"
                          onClick={() => copyToClipboard(salt, "Salt")}
                        >
                          <Copy className="h-4 w-4" />
                          <span className="sr-only">Copy salt</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 py-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="https://instagram.com/drbaph" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-primary" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://x.com/drbaph" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-primary" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://drbaph.xyz" target="_blank" rel="noopener noreferrer" aria-label="Website">
              <Globe className="h-5 w-5 text-primary" />
            </Link>
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

