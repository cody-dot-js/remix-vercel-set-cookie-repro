import { json, type MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const headers = new Headers([
    ["Set-Cookie", "aaa=loader"],
    ["Set-Cookie", "bbb=loader"],
    ["Set-Cookie", "ccc=loader"],
  ]);

  return json({
    message: "Hello from Remix!",
  }, {
    headers,
  });
}

export const action = async () => {
  const headers = new Headers([
    ["Set-Cookie", "aaa=action"],
    ["Set-Cookie", "bbb=action"],
    ["Set-Cookie", "ccc=action"],
  ]);

  return json({
    message: "Hello from Remix!",
  }, {
    headers,
  });
}

export default function Index() {
  return (
    <div className="font-sans p-4 space-y-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      <Form method="POST">
        <button type="submit" className="px-4 py-1 border border-gray-400 rounded">
          Trigger Action
        </button>
      </Form>
    </div>
  );
}
