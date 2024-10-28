import Footer from "@/Components/footer/footer";
import NavbarPage from "@/Components/navbar/navbar";
import Inicio from "./home/page";


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
    {/* Navbar */}
    <NavbarPage />

    {/* Contenido principal con curva en la parte inferior */}
    <div className="flex-grow bg-[#06060A] text-white relative overflow-hidden">
        <main className="mx-auto max-w-xl">
            <div className="px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <Inicio />
            </div>
        </main>

        {/* Curva de montaña en la parte inferior */}
        <div className="absolute bottom-0 w-full">
            <svg
                viewBox="0 0 1440 320"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#06060A"
                    d="M0,224L60,218.7C120,213,240,203,360,192C480,181,600,171,720,165.3C840,160,960,160,1080,149.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
            </svg>
        </div>
    </div>

    {/* Footer */}
    <Footer />
</div>
  );
}
