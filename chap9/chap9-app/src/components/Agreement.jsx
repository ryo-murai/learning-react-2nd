export default function Agreement({ onAgree = f => f }) {
  return (
    <div className="agreement">
      <h1>Terms of Service</h1>
      <p>
        By using this application, you agree to the following terms and conditions.
      </p>
      <ul>
        <li>You must be at least 18 years old to use this service.</li>
        <li>You agree to provide accurate information when creating an account.</li>
        <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
        <li>We reserve the right to modify or terminate the service at any time.</li>
      </ul>
      <p>For more details, please read our full Terms of Service.</p>
      <button onClick={onAgree}>I Agree</button>
    </div>
  );
}