import getRecords from '@/app/actions/getRecords';
import RecordItem from './RecordItem';
import { Record } from '@/types/Record';

const RecordHistory = async () => {
    const { records, error } = await getRecords();

    if (error) {
        return (
            <div className='bg-red-100 text-red-800 border border-red-300 rounded-md p-4 text-center'>
                <p>{error}</p>
            </div>
        );
    }

    if (!records || records.length === 0) {
        return (
            <div className='bg-gray-900 flex items-center justify-center pb-6'>
                <div className='bg-gray-900 shadow-lg rounded-lg p-8 w-full text-center'>
                    <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                        No se encontraron registros de sueño.
                    </h3>
                    <p className='text-gray-200'>
                        Empieza a registrar tus horas de sueño para ver tu historial.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-gray-900 p-6 '>
            <div className='bg-gray-900 shadow-lg rounded-lg p-8 mx-auto'>
                <h3 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent border-b border-gray-600 pb-6'>
                    Historial de registros
                </h3>
                <ul className='space-y-4'>
                    {records.map((record: Record) => (
                        <RecordItem key={record.id} record={record} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecordHistory;