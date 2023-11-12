export async function GET() {
  const activity = {
    name: "Ultra-trail Snowdonia 100",
    distance: 101517,
    duration: 71100,
  };

  return Response.json(activity);
}
