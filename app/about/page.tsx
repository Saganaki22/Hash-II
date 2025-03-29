import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShieldCheck, Key, Code, Lock, BarChart4, Twitter, Globe, Instagram } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container px-4 sm:px-6 py-6 md:py-10 max-w-full">
      <div className="grid gap-6">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">About Hash</CardTitle>
            <CardDescription>Understanding Base64 encoding and AES-256 encryption</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="base64" className="w-full">
              <div className="overflow-x-auto pb-2">
                <TabsList className="flex w-full flex-nowrap min-w-max md:grid md:grid-cols-5">
                  <TabsTrigger value="base64" className="whitespace-nowrap">
                    <Code className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>Base64</span>
                  </TabsTrigger>
                  <TabsTrigger value="aes" className="whitespace-nowrap">
                    <Lock className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>AES-256</span>
                  </TabsTrigger>
                  <TabsTrigger value="pbkdf2" className="whitespace-nowrap">
                    <Key className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>PBKDF2</span>
                  </TabsTrigger>
                  <TabsTrigger value="salt" className="whitespace-nowrap">
                    <ShieldCheck className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>Salt</span>
                  </TabsTrigger>
                  <TabsTrigger value="security" className="whitespace-nowrap">
                    <BarChart4 className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>Security</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Tab content sections remain the same */}
              <TabsContent value="base64" className="mt-6 space-y-4 overflow-x-auto">
                <h3 className="text-lg font-semibold animate-typing">
                  Base64 is an <span className="text-primary font-bold">encoding scheme</span>, not encryption.
                </h3>

                <p className="break-words">
                  Base64 encoding converts binary data into a set of 64 ASCII characters (A-Z, a-z, 0-9, +, /). It's
                  designed to represent binary data in environments that only support text, ensuring data integrity
                  during transfer.
                </p>

                <p className="break-words">Key characteristics of Base64:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Increases size by approximately 33% (3 bytes become 4 characters)</li>
                  <li>Fully reversible with no data loss</li>
                  <li>
                    Provides <span className="text-primary font-bold">no security</span> - anyone can decode it
                  </li>
                  <li>Commonly used for data transfer, not data protection</li>
                </ul>

                <div className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
                  <div className="text-muted-foreground">// Example of Base64 encoding</div>
                  "Hello World" → "SGVsbG8gV29ybGQ="
                </div>

                <p className="break-words">Base64 is used extensively in:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Email attachments (MIME)</li>
                  <li>Data URLs in web pages</li>
                  <li>Storing binary data in JSON</li>
                  <li>Embedding images in CSS/HTML</li>
                  <li>API authentication (Basic Auth)</li>
                </ul>
              </TabsContent>

              {/* Other tab contents remain the same */}
              <TabsContent value="aes" className="mt-6 space-y-4 overflow-x-auto">
                <h3 className="text-lg font-semibold">
                  AES (Advanced Encryption Standard) is a{" "}
                  <span className="text-primary font-bold">symmetric encryption algorithm</span>.
                </h3>

                <p className="break-words">
                  AES-256 refers to the 256-bit key size variant, offering the highest security level in the AES family.
                  It was adopted by the U.S. government and is widely used worldwide for secure data protection.
                </p>

                <p className="break-words">AES-256 encryption:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Transforms plaintext into seemingly random ciphertext</li>
                  <li>Uses the same key for both encryption and decryption</li>
                  <li>Operates on fixed-size blocks of data (128 bits)</li>
                  <li>Applies multiple rounds of complex transformations</li>
                  <li>Provides true cryptographic security backed by mathematics</li>
                </ul>

                <div className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
                  <div className="text-muted-foreground">// Example of AES-256 encryption</div>
                  "Hello World" + Password + Salt → "U2FsdGVkX1+7NFL1w9TIHptP9wOCvYLK7Fg="
                </div>

                <p className="break-words">
                  The "256" in AES-256 refers to the key length in bits. Larger keys provide exponentially more
                  security.
                </p>

                <div className="w-full bg-muted rounded-full h-6 mt-4 mb-2">
                  <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-6 rounded-full w-[95%]"></div>
                  <div className="text-center -mt-6 text-background font-medium">AES-256: Extremely Secure</div>
                </div>

                <p className="break-words">AES-256 is used in:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Government and military systems</li>
                  <li>Financial institutions</li>
                  <li>VPN services</li>
                  <li>Secure file storage</li>
                  <li>Healthcare data protection</li>
                  <li>Secure messaging apps</li>
                </ul>
              </TabsContent>

              <TabsContent value="pbkdf2" className="mt-6 space-y-4 overflow-x-auto">
                <h3 className="text-lg font-semibold">
                  PBKDF2 (Password-Based Key Derivation Function 2) is a{" "}
                  <span className="text-primary font-bold">key stretching algorithm</span>.
                </h3>

                <p className="break-words">
                  PBKDF2 takes a password and transforms it into a cryptographic key suitable for encryption. It's
                  specifically designed to make password cracking computationally expensive and slow.
                </p>

                <p className="break-words">How PBKDF2 works:</p>
                <ol className="ml-6 list-decimal space-y-2">
                  <li>Takes a password, salt, and iteration count as inputs</li>
                  <li>Applies a pseudorandom function (like HMAC-SHA256) to the password and salt</li>
                  <li>Repeats this process many times (iterations) to increase computational cost</li>
                  <li>Produces a derived key of specified length (256 bits for AES-256)</li>
                </ol>

                <div className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
                  <div className="text-muted-foreground">// PBKDF2 key derivation process</div>
                  DerivedKey = PBKDF2(Password, Salt, Iterations, KeyLength)
                  <br />
                  <div className="text-muted-foreground">// Example</div>
                  PBKDF2("mypassword", "randomsalt", 100000, 32) → 256-bit key
                </div>

                <p className="break-words">Key security features of PBKDF2:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <span className="font-semibold">Iteration count:</span> Makes brute-force attacks slower (we use
                    100,000 iterations)
                  </li>
                  <li>
                    <span className="font-semibold">Salt integration:</span> Prevents rainbow table attacks and ensures
                    unique keys
                  </li>
                  <li>
                    <span className="font-semibold">Computational intensity:</span> Deliberately resource-intensive to
                    thwart attackers
                  </li>
                  <li>
                    <span className="font-semibold">Deterministic:</span> Same inputs always produce the same key
                  </li>
                </ul>

                <p className="break-words">
                  In our Hash application, PBKDF2 is used to convert your password into a secure encryption key for
                  AES-256. This provides several benefits:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Allows use of human-memorable passwords instead of 256-bit binary keys</li>
                  <li>Significantly increases the work required for password cracking</li>
                  <li>When combined with a salt, ensures that identical passwords produce different encryption keys</li>
                  <li>Provides a standardized, well-vetted method for key derivation</li>
                  <li>Our implementation uses 100,000 iterations, making brute-force attacks extremely difficult</li>
                </ul>
              </TabsContent>

              <TabsContent value="salt" className="mt-6 space-y-4 overflow-x-auto">
                <h3 className="text-lg font-semibold">
                  A <span className="text-primary font-bold">salt</span> is a random piece of data used as an additional
                  input to a hashing or key derivation function.
                </h3>

                <p className="break-words">
                  In our AES implementation, the salt plays a crucial role in strengthening security by ensuring that
                  identical passwords don't produce identical encryption keys.
                </p>

                <p className="break-words">How salts enhance security:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Prevents identical passwords from producing identical encryption keys</li>
                  <li>Defends against rainbow table attacks (pre-computed hash tables)</li>
                  <li>Ensures uniqueness even when the same password is used multiple times</li>
                  <li>Adds complexity without requiring users to remember additional information</li>
                </ul>

                <div className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
                  <div className="text-muted-foreground">// How salt affects key derivation</div>
                  Password: "secret123" + Salt: "abc" → Key: f59c82c72c5969a8...
                  <br />
                  Password: "secret123" + Salt: "xyz" → Key: 7d9fe825f1e54936...{" "}
                  <span className="text-muted-foreground">// Completely different!</span>
                </div>

                <p className="break-words">In our implementation:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>You can generate a random salt with each encryption</li>
                  <li>You can provide a custom salt for consistent encryption results</li>
                  <li>The salt is stored alongside the encrypted data (this doesn't reduce security)</li>
                  <li>Both the correct password AND salt are required for decryption</li>
                </ul>
              </TabsContent>

              <TabsContent value="security" className="mt-6 space-y-4 overflow-x-auto">
                <h3 className="text-lg font-semibold">Practical Security Considerations</h3>

                <p className="break-words">
                  <span className="text-primary font-bold">Password Transmission:</span> This tool operates entirely in
                  your browser. Your password and data never leave your device, minimizing exposure risks.
                </p>

                <p className="break-words">
                  <span className="text-primary font-bold">Breaking AES-256:</span> The security of AES-256 is
                  well-established:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Brute-forcing a 256-bit key would require more energy than exists in the universe</li>
                  <li>All known attacks remain theoretical or require impractical conditions</li>
                  <li>Intelligence agencies worldwide rely on AES-256 for top-secret information</li>
                </ul>

                <p className="break-words">
                  To put this in perspective, breaking AES-256 with current technology would take:
                </p>

                <div className="w-full bg-muted rounded-full h-6 mt-4 mb-2">
                  <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-6 rounded-full w-[99%]"></div>
                  <div className="text-center -mt-6 text-background font-medium">
                    Billions of years with all computers on Earth
                  </div>
                </div>

                <p className="break-words">
                  <span className="text-primary font-bold">Our implementation:</span>
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Uses AES-256 in GCM mode (Galois/Counter Mode) for authenticated encryption</li>
                  <li>Employs PBKDF2 with 100,000 iterations to derive keys from passwords</li>
                  <li>Generates cryptographically secure random values for salts and initialization vectors</li>
                  <li>Processes all encryption/decryption locally in your browser using the Web Crypto API</li>
                </ul>

                <p className="break-words">
                  <span className="text-primary font-bold">Real-world vulnerabilities</span> typically come from:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Weak passwords (the most common vulnerability)</li>
                  <li>Password sharing or storage in insecure locations</li>
                  <li>Malware or keyloggers on your device</li>
                  <li>Implementation flaws in encryption software</li>
                  <li>Side-channel attacks (physical access to hardware)</li>
                </ul>

                <p className="break-words">For maximum security when using Hash:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Use strong, unique passwords</li>
                  <li>Generate a new random salt for each encryption</li>
                  <li>Share passwords via different channels than encrypted data</li>
                  <li>Clear both input and output fields when finished</li>
                </ul>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="flex flex-wrap justify-center gap-6 py-6">
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
    </div>
  )
}

