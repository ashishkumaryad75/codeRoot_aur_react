import React from "react";
import { useActionState } from "react";

export function NewOpinion() {
  function shareOpinionAction(prevState, formData) {
    const title = formData.get("title") || "";
    const body = formData.get("body") || "";
    const userName = formData.get("username") || "";

    let errors = [];

    if (title.trim().length < 5) {
      errors.push("Title must be at least five characters long.");
    }
    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push("Opinion must be between 10 and 300 characters long.");
    }

    if (!userName.trim()) {
      errors.push("Please provide your name.");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          title,
          body,
          userName,
        },
      };
    }

    console.log("Opinion submitted successfully!");

    return {
      errors: null,
      enteredValues: {
        title: "",
        body: "",
        userName: "",
      },
    };
  }

  const [formState, formAction] = useActionState(shareOpinionAction, {
    errors: null,
    enteredValues: {
      title: "",
      body: "",
      userName: "",
    },
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formAction(formData);
  };

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form onSubmit={handleSubmit}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="username" // Ensure name attribute matches formData.get() call
              defaultValue={formState.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title" // Ensure name attribute matches formData.get() call
              defaultValue={formState.enteredValues?.title}
            />
          </p>
        </div>

        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body" // Ensure name attribute matches formData.get() call
            rows={5}
            defaultValue={formState.enteredValues?.body}
          ></textarea>
        </p>

        {/* Display Errors */}
        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
