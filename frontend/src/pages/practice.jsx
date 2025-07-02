import React, { useRef,useEffect } from 'react';

function InputFocus() {
  const emailInputRef = useRef(null);  // Step 1: Create a ref

  useEffect(() => {
    emailInputRef.current.focus();     // Step 3: Focus the input when component loads
  }, []);

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        ref={emailInputRef}           // Step 2: Attach ref to input
      />
      <br />
      <input type="password" placeholder="Enter your password" />
      <br />
      <button>Login</button>
    </div>
  );
}

export default InputFocus;
