import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='border-t-2 border-black bg-black text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='text-center md:text-left mb-4 md:mb-0'>
                        <h2 className='text-lg font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                            DreamTracker
                        </h2>
                        <p className='text-gray-200 text-sm'>
                            Sigue tu sueño, mejora tu vida.
                        </p>
                    </div>

                    <div className='flex space-x-4'>
                        <Link
                            href='/'
                            className='text-gray-200 hover:text-purple-600 text-sm font-medium'
                        >
                            Inicio
                        </Link>
                        <Link
                            href='/about'
                            className='text-gray-200 hover:text-purple-600 text-sm font-medium'
                        >
                            Nosotros
                        </Link>
                        <Link
                            href='/contact'
                            className='text-gray-200 hover:text-purple-600 text-sm font-medium'
                        >
                            Contacto
                        </Link>
                    </div>
                </div>

                <div className='mt-8 text-center text-gray-500 text-sm'>
                    © {new Date().getFullYear()} DreamTracker. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;