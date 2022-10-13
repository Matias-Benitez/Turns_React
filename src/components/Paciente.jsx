const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">Minerva</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">Matias</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">mattias.benitez@gmail.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
          <span className="font-normal normal-case">13/10/2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, architecto dolorum corporis quaerat a repellendus fugit, dolores neque officia odio tempore consectetur. Nam deserunt blanditiis laboriosam cumque sed ad expedita.</span>
        </p>
      </div>
  )
}

export default Paciente