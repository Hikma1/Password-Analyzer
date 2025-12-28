Password-Analyzer                                                                                                                                                                                                  
Overview
Password Analyzer is a simple, client-side tool designed to evaluate the strength of a single password. It provides real-time feedback on password security, including:

-Entropy calculation (bits of security)                                                                                                                                                                 
-Estimated time to crack via brute-force or dictionary attacks                                                                                                                                                                                                                                     
-Detection of common patterns (e.g., sequences, repeats, keyboard patterns)                                                                                                          
-Checks against common weak passwords and leaked data concepts, suggestions for improvement

Features

Real-time Analysis: Strength updates as you type.
Entropy Estimation: Calculates Shannon entropy based on character set and length.
Crack Time Estimate: Rough calculation of offline/online attack times.
Common Vulnerability Checks:
Too short (<8 characters)
Common passwords (e.g., "password123", "qwerty")
Sequential characters (e.g., "abc", "123")
Repeated characters or patterns
Keyboard walks (e.g., "qazwsx")
