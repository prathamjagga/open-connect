import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { Editor } from "@tinymce/tinymce-react";

const AddPostDialog = ({ isOpen, onClose }) => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const [post, setPost] = useState({
    postName: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission here
    console.log("Post submitted:", post);
    // Clear the form

    fetch(
      "https://naih-frontend-production.up.railway.app/authenticate/add-post",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          photoUrl: post.image,
          description: editorRef.current ? editorRef.current.getContent() : "",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Post added");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Close the dialog
    onClose();
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <div className="w-100 fixed inset-0 z-50 mt-6">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 transition-opacity">
            <div className="fixed inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-75"></div>
          </div>
        </Transition.Child>

        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="relative z-50 mx-auto max-w-4xl rounded-md bg-white p-6 shadow-xl">
            <h2
              className="mx-4 mb-4 text-2xl font-semibold"
              style={{ marginRight: "10px" }}
            >
              Add Post
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="postName"
                  className="block text-sm font-medium text-gray-600"
                >
                  Post Name
                </label>
                <input
                  type="text"
                  id="postName"
                  name="postName"
                  value={post.postName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border p-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-600"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={post.image}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border p-2"
                />
              </div>
              <label className="mb-2 block text-sm font-medium text-gray-600">
                Project Description
              </label>
              <Editor
                apiKey="ysul8r7i0d2s6ds7t8lg1o4rl0x1ckmi6c9co8l6euz1oukn"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p>Add your project description here.</p>"
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="transit ion mx-6 rounded-md bg-indigo-500 py-2 px-4 text-white duration-300 hover:bg-indigo-600"
                >
                  Add Post
                </button>
                <button
                  className="rounded-md bg-indigo-500 py-2 px-4 text-white transition duration-300 hover:bg-indigo-600"
                  onClick={onClose}
                >
                  {" "}
                  Close
                </button>
              </div>
            </form>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
};

export default AddPostDialog;
