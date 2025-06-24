'use client';
import { useRef, useState } from 'react';
import addSleepRecord from '@/app/actions/addSleepRecord';

const AddRecord = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [amount, setAmount] = useState(6);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [sleepQuality, setSleepQuality] = useState('');

    const clientAction = async (formData: FormData) => {
        setIsLoading(true);
        setAlertMessage(null);

        formData.set('amount', amount.toString());
        formData.set('text', sleepQuality);

        const { error } = await addSleepRecord(formData);

        if (error) {
            setAlertMessage(`Error: ${error}`);
            setAlertType('error');
        } else {
            setAlertMessage('Sleep record added successfully!');
            setAlertType('success');
            formRef.current?.reset();
            setAmount(6);
            setSleepQuality('');
        }

        setIsLoading(false);
    };

    return (
        <div className='bg-gray-900 flex items-center justify-center'>
            <div className='bg-gray-900 shadow-lg rounded-lg p-8 w-full'>
                <h3 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                    Sigue tu sueño, mejora tu vida.
                </h3>
                <form
                    ref={formRef}
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(formRef.current!);
                        clientAction(formData);
                    }}
                    className='space-y-6'
                >
                    <div className='flex flex-col md:flex-row md:space-x-4'>
                        <div className='flex-1'>
                            <label
                                htmlFor='text'
                                className='block text-sm font-medium text-gray-400 mb-2'
                            >
                                Calidad de sueño
                            </label>
                            <select
                                id='text'
                                name='text'
                                value={sleepQuality}
                                onChange={(e) => setSleepQuality(e.target.value)}
                                className='block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 px-4 py-2 bg-background dark'
                                required
                            >
                                <option value='' disabled>
                                    Calidad del sueño...
                                </option>
                                <option value='Refrescante'>🌞 Refrescante</option>
                                <option value='Cansado'>😴 Cansado</option>
                                <option value='Neutral'>😐 Neutral</option>
                                <option value='Exhausto'>😫 Exhausto</option>
                                <option value='Energetico'>⚡ Energetico</option>
                            </select>
                        </div>


                        <div className='flex-1'>
                            <label
                                htmlFor='date'
                                className='block text-sm font-medium text-gray-400 mb-2'
                            >
                                Fecha de sueño
                            </label>
                            <input
                                type='date'
                                name='date'
                                id='date'
                                className='block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 px-4 py-2 bg-background dark'
                                placeholder='Select a date'
                                required
                                onFocus={(e) => e.target.showPicker()}
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor='amount'
                            className='block text-sm font-medium text-gray-400 mb-2'
                        >
                            Horas dormidas
                            <br />
                            <span className='text-xs text-gray-200'>
                                (Selecciona entre 0 y 12 en pasos de 0.5 horas)
                            </span>
                        </label>
                        <input
                            type='range'
                            name='amount'
                            id='amount'
                            min='0'
                            max='12'
                            step='0.5'
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                            className='w-full cursor-pointer'
                        />
                        <div className='text-center text-gray-400 mt-2'>{amount} Horas</div>
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-4 py-2 rounded-md font-medium shadow-md transition flex items-center justify-center cursor-pointer'
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <svg
                                className='animate-spin h-5 w-5 text-white'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <circle
                                    className='opacity-25'
                                    cx='12'
                                    cy='12'
                                    r='10'
                                    stroke='currentColor'
                                    strokeWidth='4'
                                ></circle>
                                <path
                                    className='opacity-75'
                                    fill='currentColor'
                                    d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
                                ></path>
                            </svg>
                        ) : (
                            'Add Sleep Record'
                        )}
                    </button>
                </form>

                {alertMessage && (
                    <div
                        className={`mt-4 p-3 rounded-md text-sm ${alertType === 'success'
                            ? 'bg-green-100 text-green-800 border border-green-300'
                            : 'bg-red-100 text-red-800 border border-red-300'
                            }`}
                    >
                        {alertMessage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddRecord;