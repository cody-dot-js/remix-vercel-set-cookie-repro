import { json, type MetaFunction } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";

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

  return redirect("/", {
    headers,
  });
}

export default function Other() {
  return (
    <div className="font-sans p-4 space-y-4">
      <h1 className="text-3xl">Other route</h1>
      <Form method="POST">
        <button type="submit" className="px-4 py-1 border border-gray-400 rounded">
          Trigger Action
        </button>
      </Form>
    </div>
  );
}
