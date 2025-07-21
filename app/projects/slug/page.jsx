export default function ProjectDetail({ params }) {
  return (
    <div className="pt-40">
      <h1 className="text-3xl font-bold">Project: {params.slug}</h1>
      {/* Fetch and render details based on `params.slug` */}
    </div>
  );
}
