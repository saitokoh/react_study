import React from "react";

export default function PostForm({ onSave }) {
  return (
    <form>
      <button type="button" onClick={onSave}>
        Save
            </button>
    </form>
  );
}
