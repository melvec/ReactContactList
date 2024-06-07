import React, { useRef } from "react";

export const Search = ({ onSearch }) => {
  const ref = useRef(null);

  const styles = {
    formContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "16px",
      borderRadius: "8px",
      border: "1px solid #ced4da",
      backgroundColor: "#fff",
      width: "100%", // Ensure the container takes the full width
      maxWidth: "600px", // Optional: set a max width
      margin: "0 auto", // Center the form container horizontally
    },
    input: {
      width: "100%", // Ensure the input field takes the full width of its container
      padding: "12px", // Increase padding for a larger input area
      borderRadius: "4px",
      border: "1px solid #ced4da",
      fontSize: "16px", // Optional: increase font size for better readability
    },
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <div style={styles.formContainer}>
        <input
          ref={ref}
          type="text"
          id="search"
          style={styles.input}
          placeholder="Search"
        />
      </div>
    </form>
  );
};
