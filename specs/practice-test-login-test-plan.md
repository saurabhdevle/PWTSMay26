# Practice Test Automation Login Page Test Plan

## Application Overview

Comprehensive QA test plan for the Practice Test Automation login page, covering functional, validation, security, and edge-case scenarios.

## Test Scenarios

### 1. Core Login Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login with valid credentials

**File:** `tests/login/positive-successful-login.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser session.
    - expect: The page loads successfully and displays the login form with username and password fields and a submit button.
  2. Enter a valid username and password (for example, student / Password123).
    - expect: The entered values are shown correctly in their respective fields.
  3. Click the Submit button.
    - expect: The user is authenticated successfully and the application navigates to the post-login page or success state.
  4. Verify the post-login content and session state.
    - expect: The success page or dashboard content is displayed and the user is no longer on the login form.

#### 1.2. Login with remembered valid credentials from prior session

**File:** `tests/login/positive-remembered-session.spec.ts`

**Steps:**
  1. Open the login page after a previous successful login in the same browser profile.
    - expect: The application either preserves the session or presents the appropriate authenticated state.
  2. Attempt to access the protected area directly.
    - expect: The user is recognized as authenticated and is not forced back to the login page unnecessarily.

### 2. Input Validation and Negative Cases

**Seed:** `tests/seed.spec.ts`

#### 2.1. Login with empty username and password

**File:** `tests/login/negative-empty-fields.spec.ts`

**Steps:**
  1. Leave the username and password fields blank.
    - expect: The form does not submit successfully.
    - expect: The user receives a validation error indicating that both fields are required.

#### 2.2. Login with empty username only

**File:** `tests/login/negative-empty-username.spec.ts`

**Steps:**
  1. Enter a valid password but leave the username blank.
    - expect: The form is rejected.
    - expect: A clear message prompts for a username.

#### 2.3. Login with empty password only

**File:** `tests/login/negative-empty-password.spec.ts`

**Steps:**
  1. Enter a valid username but leave the password blank.
    - expect: The form is rejected.
    - expect: A clear message prompts for a password.

#### 2.4. Login with invalid username and valid password

**File:** `tests/login/negative-invalid-username.spec.ts`

**Steps:**
  1. Enter an invalid username and a valid password.
    - expect: Authentication fails.
    - expect: The user is shown an appropriate error message indicating invalid credentials.

#### 2.5. Login with valid username and invalid password

**File:** `tests/login/negative-invalid-password.spec.ts`

**Steps:**
  1. Enter a valid username and an incorrect password.
    - expect: Authentication fails.
    - expect: The user is shown an appropriate error message indicating invalid credentials.

#### 2.6. Login with incorrect credentials for both fields

**File:** `tests/login/negative-both-invalid.spec.ts`

**Steps:**
  1. Enter random values in both fields.
    - expect: Authentication fails.
    - expect: The user remains on the login page or is shown an error state without exposing sensitive information.

### 3. Edge Cases and Boundary Conditions

**Seed:** `tests/seed.spec.ts`

#### 3.1. Username and password with leading and trailing spaces

**File:** `tests/login/edge-whitespace.spec.ts`

**Steps:**
  1. Enter values with extra spaces before and after the username and password.
    - expect: The application handles the input consistently and either trims the values or shows a validation message if spaces are not allowed.

#### 3.2. Very long username and password inputs

**File:** `tests/login/edge-long-input.spec.ts`

**Steps:**
  1. Enter extremely long strings in both fields.
    - expect: The form behaves predictably without crashing or exposing layout issues.
    - expect: The application either rejects the input or handles it safely.

#### 3.3. Special characters in username and password

**File:** `tests/login/edge-special-characters.spec.ts`

**Steps:**
  1. Enter special characters such as !, @, #, $, %, quotes, and slashes in the fields.
    - expect: The inputs are handled safely and the application does not break or misbehave.

#### 3.4. Case sensitivity check for credentials

**File:** `tests/login/edge-case-sensitivity.spec.ts`

**Steps:**
  1. Try the valid username and password with different casing variations.
    - expect: The application behaves according to its defined credential rules; any mismatch should fail clearly and consistently.

#### 3.5. Submit button behavior with keyboard interaction

**File:** `tests/login/edge-keyboard-accessibility.spec.ts`

**Steps:**
  1. Use the keyboard to tab through the form and submit it with the Enter key.
    - expect: The form remains accessible and submits correctly if the inputs are valid.

#### 3.6. Multiple rapid submissions

**File:** `tests/login/edge-multiple-submissions.spec.ts`

**Steps:**
  1. Click the submit button repeatedly or press Enter multiple times quickly.
    - expect: The application avoids duplicate actions or duplicate sessions and remains stable.

### 4. Security, Usability, and Accessibility

**Seed:** `tests/seed.spec.ts`

#### 4.1. Password masking and field behavior

**File:** `tests/login/security-password-mask.spec.ts`

**Steps:**
  1. Type a password into the password field.
    - expect: The password is masked and not displayed in clear text.
    - expect: The field allows normal editing and clearing.

#### 4.2. Error message clarity and non-disclosure

**File:** `tests/login/security-error-message.spec.ts`

**Steps:**
  1. Attempt login with incorrect credentials.
    - expect: The application shows a clear, user-friendly error message without exposing internal system details.

#### 4.3. Page accessibility and focus order

**File:** `tests/login/accessibility-focus-order.spec.ts`

**Steps:**
  1. Use Tab and Shift+Tab to navigate the form.
    - expect: The focus order is logical, visible, and reaches the username field, password field, and submit button in sequence.

#### 4.4. Browser refresh after failed login

**File:** `tests/login/edge-refresh-after-failure.spec.ts`

**Steps:**
  1. Trigger a failed login and then refresh the browser.
    - expect: The page reloads cleanly and the form state is reset appropriately without unexpected errors.
