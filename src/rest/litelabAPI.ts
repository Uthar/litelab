// A mock function to mimic making an async request for data
export function fetchProject(name = "foo") {
    return new Promise<{ data: string }>((resolve) =>
      setTimeout(() => resolve({ data: name }), 500)
    );
  }
  