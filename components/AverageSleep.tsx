import React from 'react';
import getUserRecord from '@/app/actions/getUserRecord';

const AverageSleep = async () => {
    try {
        const { record, daysWithRecords } = await getUserRecord();


        const validRecord = record || 0;
        const validDays =
            daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;

        const averageSleep = validRecord / validDays;

        const hours = Math.floor(averageSleep);
        const minutes = Math.round((averageSleep - hours) * 60);

        return (
            <div className='bg-gray-900 flex items-center justify-center'>
                <div className='bg-gray-900 shadow-lg rounded-lg p-8 w-full text-center'>
                    <h4 className='text-lg font-medium text-gray-200 mb-2'>
                        Su promedio de sueño el mes pasado
                    </h4>
                    <h1 className='sm:text-3xl text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                        {hours} horas {minutes} minutos
                    </h1>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching user record:', error);
        return (
            <div className='bg-gray-100 flex items-center justify-center min-h-screen'>
                <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center'>
                    <h4 className='text-lg font-medium text-gray-200 mb-2'>Error</h4>
                    <p className='text-red-600'>No puede calcularse el promedio de sueño.</p>
                </div>
            </div>
        );
    }
};

export default AverageSleep;