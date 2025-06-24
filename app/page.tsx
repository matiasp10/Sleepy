import AverageSleep from "@/components/AverageSleep";
import AddNewRecord from '@/components/AddNewRecord';
import BestWorstSleep from "@/components/BestWorstSleep";
import RecordChart from "@/components/RecordChart";
import RecordHistory from "@/components/RecordHistory";
import { currentUser } from '@clerk/nextjs/server';
import Guest from "@/components/Guest";

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <main className='bg-black text-white font-sans min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-6'>
          <div className='bg-gray-900 text-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6'>
            <img
              src={user.imageUrl}
              alt={`Perfil de ${user.firstName}`}
              className='w-24 h-24 rounded-full border border-gray-300 shadow-md'
            />

            {/* User Details */}
            <div className='flex-1'>
              <h2 className='text-2xl md:text-3xl font-bold text-purple-400 mb-2'>
                Bienvenido, {user.firstName} 👋
              </h2>
              <p className='text-gray-200 mb-4'>
                Aqui tienes un pequeño vistazo de tu actividad de sueño mas reciente. Manten tus datos para obtener mejores analisis y mejorar tu descanso.
              </p>
              <div className='space-y-2'>
                <p className='text-gray-200'>
                  <span className='font-semibold text-gray-400'>Ingreso:</span>{' '}
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
                <p className='text-gray-200'>
                  <span className='font-semibold text-gray-400'>
                    Ultima actividad:
                  </span>{' '}
                  {user.lastActiveAt
                    ? new Date(user.lastActiveAt).toLocaleString()
                    : 'N/A'}
                </p>
              </div>
            </div>
          </div>
          <AddNewRecord />
        </div>

        <div className='space-y-6'>
          <RecordChart />
          <AverageSleep />
          <BestWorstSleep />
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        <RecordHistory />
      </div>
    </main>
  );
}
