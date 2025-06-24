import getRecords from '@/app/actions/getRecords';
import BarChart from './BarChart';

const RecordChart = async () => {
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
            <div className='bg-gray-900 flex items-center justify-center rounded'>
                <div className='bg-gray-900 shadow-lg rounded-lg p-8 w-full  text-center'>
                    <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                        Sin datos de sueño
                    </h3>
                    <p className='text-gray-200'>
                        Empieza a registrar tus horas de sueño para ver el grafico.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-gray-900 flex items-center justify-center'>
            <div className='bg-gray-900 shadow-lg rounded-lg p-8 w-full '>
                <h3 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                    Grafico de horas dormidas
                </h3>
                <BarChart
                    records={records.map((record) => ({
                        ...record,
                        date: String(record.date),
                    }))}
                />
            </div>
        </div>
    );
};

export default RecordChart;