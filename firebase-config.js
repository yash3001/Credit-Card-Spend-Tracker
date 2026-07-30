// ---------------------------------------------------------------------------
// Firebase web config.
// Get these values from the Firebase console:
//   Project settings (gear icon) -> "Your apps" -> Web app -> "SDK setup and
//   configuration" -> Config.  Paste them below, replacing the placeholders.
//
// NOTE: These keys are NOT secret. Firebase web API keys are meant to be public
// and safe to commit. Your data is protected by Google sign-in + Firestore
// security rules, not by hiding this file.
// ---------------------------------------------------------------------------
export const firebaseConfig = {
  apiKey: "AIzaSyDWNfKayZVNLooEGNgHo3_o3926VgP_mQ4",
  authDomain: "spend-tracker-3a478.firebaseapp.com",
  projectId: "spend-tracker-3a478",
  storageBucket: "spend-tracker-3a478.firebasestorage.app",
  messagingSenderId: "116802849129",
  appId: "1:116802849129:web:ec7c94a6ec6f29b2cdd5f8",
  measurementId: "G-VVNHK39FDN"
};

// Only this Google account may use the app. Anyone else who signs in is
// immediately signed out with a "not authorized" message. This must ALSO be
// enforced in Firestore security rules (see setup notes) — that is the real
// lock; this is just the friendly UI gate.
export const ALLOWED_EMAIL = "yashchauhan197@gmail.com";
