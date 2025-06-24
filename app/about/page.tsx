import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const AboutPage = () => {
    return (
        <div className='font-sans bg-black text-white'>
            {/* Hero Section */}
            <section className='flex flex-col items-center justify-center text-center py-16 px-8 bg-black'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                    DreamTracker
                </h1>
                <p className='text-lg md:text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                    Tu herramienta para seguir tus horarios de sueño y mejorar tu vida.
                </p>
            </section>

            {/* Mission Section */}
            <section className='py-16 px-8 bg-gray-950'>
                <h2 className='text-3xl font-bold text-center mb-8'>Our Mission</h2>
                <p className='text-gray-200 max-w-3xl mx-auto text-center'>
                    At SleepTracker, we aim to help individuals achieve better sleep and
                    overall well-being by providing insights into their sleep patterns.
                    Better sleep leads to a healthier, happier life, and we’re here to
                    guide you every step of the way.
                </p>
            </section>

            {/* Features Section */}
            <section className='py-16 px-8 bg-black'>
                <h2 className='text-3xl font-bold text-center mb-8'>
                    Porque elegir DreamTracker?
                </h2>
                <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {/* <div className='bg-white p-6 rounded-md shadow'>
                        <h3 className='text-xl font-bold mb-2'>Comprehensive Tracking</h3>
                        <p className='text-gray-600'>
                            Monitor your sleep patterns and identify areas for improvement.
                        </p>
                    </div> */}
                    <Card className='bg-background dark p-4 rounded-md shadow'>
                        <CardTitle>Seguimiento inteligente</CardTitle>
                        <CardDescription>Monitorea tus patrones de sueño e identifica áreas para mejorar.</CardDescription>
                    </Card>
                    <Card className='bg-background dark p-4 rounded-md shadow'>
                        <CardTitle>Informe personalizado</CardTitle>
                        <CardDescription>Recibe recomendaciones personalizadas para mejorar tu calidad de sueño.</CardDescription>
                    </Card>
                    <Card className='bg-background dark p-4 rounded-md shadow'>
                        <CardTitle>Diseño amistoso</CardTitle>
                        <CardDescription>Disfruta de una experiencia intuitiva y fluida en todos los dispositivos.</CardDescription>
                    </Card>

                </div>
            </section>

            {/* Story Section */}
            <section className='py-16 px-8 bg-gray-950'>
                <h2 className='text-3xl font-bold text-center mb-8'>Nuestra historia</h2>
                <p className='text-gray-200 max-w-3xl mx-auto text-center'>
                    DreamTracker fue creada para saciar las crecientes necesidad para mejorar el sueño. Nuestro equipo de expertos en sueño y tecnicos desarrollaron esta plataforma que combina tecnologia de punta con informes accionables. Desde nuestro lanzamiento, tuvimos incontables usuarios a cuales ayudamos a dormir mejor y a mejorar su salud general.
                </p>
            </section>

            {/* Call to Action Section */}
            <section className='py-16 px-8 bg-black text-center'>
                <h2 className='text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                    Preparado para dormir mejor?
                </h2>
                <p className='text-lg mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                    Unete a DreamTracker hoy y da tus primeros pasos para mejorar la calidad de sueño y tener una vida mas saludable.
                </p>
                <Link
                    href='/sign-up'
                    className='inline-block bg-white text-purple-600 hover:text-purple-700 px-6 py-3 rounded-md font-medium shadow-md transition'
                >
                    Empieza ya!
                </Link>
            </section>
        </div>
    );
};

export default AboutPage;