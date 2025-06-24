import { SignInButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import { IconSparkles } from '@tabler/icons-react';
import { Separator } from './ui/separator';

const Guest = () => {
    return (
        <div className='font-sans bg-black text-white'>
            {/* Hero Section */}
            <div className='flex flex-col items-center justify-between p-3 md:p-16 bg-black pt-20'>
                <div className='flex justify-center items-center flex-col mb-8 xl:pl-10'>
                    <h1 className='text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                        Bienvenidos a DreamsTracker
                    </h1>
                    <p className='md:text-xl mb-6'>
                        Monitoreá tu sueño con datos. Analizá tus hábitos nocturnos y optimizá tu descanso con métricas precisas.
                    </p>
                    <SignInButton>
                        <Button variant={"ghost"}>
                            <IconSparkles /> Empieza ya!
                        </Button>
                    </SignInButton>
                </div>
            </div>

            {/* Divider */}
            <Separator className='' />

            {/* Frequently Asked Questions Section */}
            <div className='py-16 px-8 bg-black'>
                <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>
                    Preguntas frecuentes
                </h2>
                <div className='max-w-3xl mx-auto space-y-8'>
                    <div>
                        <h3 className='text-xl font-bold'>Que es DreamTracker?</h3>
                        <p className='text-gray-300'>
                            DreamTracker es tu asistente nocturno digital. Una app diseñada para registrar y analizar tus horarios de sueño, ayudándote a descubrir patrones, mejorar tu descanso y despertar cada día con más energía.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>Como funciona?</h3>
                        <p className='text-gray-300'>
                            Registrás tus horas de acostarte y despertarte manualmente, y listo puedes ver un analisis de tus datos sobre tu sueño.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>Es DreamTracker gratuito?</h3>
                        <p className='text-gray-300'>
                            Sí. DreamTracker es completamente gratuita: podés registrar tus horas de sueño, ver gráficos y recibir recomendaciones sin coste.
                        </p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <Separator />

            {/* Testimonials Section */}
            <div className='py-16 px-8 bg-black'>
                <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>
                    Que dicen nuestros usuarios
                </h2>
                <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='bg-black p-6 rounded-md shadow'>
                        <p className='text-white mb-4'>
                            &quot;Con DreamTracker empecé a notar que siempre dormía menos los martes. Solo eso me ayudó a ajustar mi rutina. Es simple, linda y útil. La uso todas las noches.&quot;
                        </p>
                        <p className='text-purple-500 font-bold'>- Romina, 29 años, diseñadora gráfica</p>
                    </div>
                    <div className='bg-black p-6 rounded-md shadow'>
                        <p className='text-white mb-4'>
                            &quot;Me encanta porque no es un monstruo lleno de funciones inútiles. Trackeo mi sueño, veo los datos, fin. Y encima se ve muy bien.&quot;
                        </p>
                        <p className='text-purple-500 font-bold'>- Marcos, 35 años, desarrollador backend</p>
                    </div>
                    <div className='bg-black p-6 rounded-md shadow'>
                        <p className='text-white mb-4'>
                            &quot;Dormir bien es esencial para vivir bien. Esta app me ayudó a tomar conciencia. Me gusta que no sea invasiva, solo la abro, anoto, y listo!&quot;
                        </p>
                        <p className='text-purple-500 font-bold'>- Clara, 42 años, profesora de yoga</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guest;