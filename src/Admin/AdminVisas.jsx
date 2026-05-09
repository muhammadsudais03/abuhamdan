import { useAdmin } from "./AdminContext";

const statusStyle = {
  Pending: "text-yellow-400",
  Approved: "text-green-400",
  Rejected: "text-red-400",
};

export default function AdminVisas() {
  const { visas, updateVisaStatus, deleteVisa } = useAdmin();

  return (
    <div className="flex flex-col gap-6">

      <h2 className="text-white text-2xl font-bold">Visa Applications</h2>
      <p className="text-sky-400 text-sm">
        Total: {visas.length}
      </p>

      <div className="bg-sky-900/40 border border-cyan-400/10 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-sky-400 border-b border-cyan-400/10">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Country</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {visas.map((v) => (
              <tr key={v.id} className="border-b border-sky-800/30">

                <td className="p-3 text-cyan-400">#{v.id}</td>

                <td className="p-3 text-white">{v.country}</td>

                <td className="p-3 text-sky-300">{v.category}</td>

                <td className={`p-3 font-semibold ${statusStyle[v.status]}`}>
                  {v.status}
                </td>

                <td className="p-3 flex gap-2">
                  <select
                    value={v.status}
                    onChange={(e) => updateVisaStatus(v.id, e.target.value)}
                    className="bg-sky-950 border border-cyan-400/20 text-white text-xs px-2 py-1 rounded"
                  >
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>

                  <button
                    onClick={() => deleteVisa(v.id)}
                    className="text-red-400 text-xs border border-red-400/20 px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}