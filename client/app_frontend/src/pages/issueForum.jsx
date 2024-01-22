import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

const IssueForum = ({}) => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setComments([...comments, editorRef.current.getContent()]);
    }
  };
  const [issueUrl, setIssueUrl] = useState("");
  const params = useParams();

  useEffect(() => {
    console.log("params", params);
    console.log(params);
    setIssueUrl(
      `https://api.github.com/repos/netflix/conductor/issues/${params.number}`
    );
  }, []);
  const [issueDetails, setIssueDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchIssueDetails = async () => {
      try {
        const response = await fetch(issueUrl);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch issue details: ${response.status} ${response.statusText}`
          );
        }

        const issueData = await response.json();
        setIssueDetails(issueData);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchIssueDetails();
  }, [issueUrl]);

  const handleCommentSubmit = () => {};

  return (
    <div className="mx-auto mt-8 max-w-2xl p-4">
      {issueDetails ? (
        <div>
          <h1 className="mb-4 text-2xl font-bold">{issueDetails.title}</h1>
          <p className="mb-4 text-gray-600">{issueDetails.body}</p>

          <div className="mt-8 border-t border-gray-300 pt-4">
            <h2 className="mb-4 text-xl font-bold">Discuss</h2>
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

            <button
              onClick={log}
              className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
            >
              Reply
            </button>
            {/* Comment Box */}
            <div className="mb-4">
              {/* <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full rounded border p-2"
                placeholder="Add your comment..."
              ></textarea> */}
            </div>

            {/* Display Comments */}
            <div className="mt-4 mb-6">
              {comments.map((comment, index) => (
                <div key={index} className="mb-4 border-t border-gray-300 pt-2">
                  {/* <p>{comment}</p> */}
                  <div dangerouslySetInnerHTML={{ __html: comment }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading issue details...</p>
      )}
      {/* <button onClick={log}>LOg editor</button> */}
    </div>
  );
};

export default IssueForum;
