export default function Inicio() {
    return(
        <div className="flex items-center justify-between h-[500px]w-full bg-[#1c1c22]">
    {/* Columna Izquierda */}
    <div className="p-10 w-1/2 max-w-xl ml-20">
        <div className="py-10">
            <h1 className="text-4xl font-bold text-white">
                Bienvenido a nuestra web acerca de nuestro producto
            </h1>
        </div>
        <div>
            <p className="text-white mb-5">
                Con cada viaje, limpiamos los cenotes y construimos un futuro sostenible para las próximas generaciones, uniendo tecnología e innovación al servicio del planeta.
            </p>
            <button className="text-2xl border-2 border-green-400 text-lime-500 bg-transparent px-4 py-2 rounded">
                Comenzar
            </button>
        </div>
    </div>

    {/* Columna Derecha (Imagen) */}
    <div className="w-2/4 h-full flex items-center justify-center">
    <div>
        <img 
            src="https://www.planetcustodian.com/wp-content/uploads/2021/06/AI-Powered-ClearBot-is-the-New-Marine-Trash-Collecting-drone.jpg" 
            alt="Imagen inicio" 
            className="h-full object-cover rounded-lg shadow-lg"
        />
        </div>
    </div>
</div>

    );
}