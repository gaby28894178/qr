import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

function App() {
  const patientUrl = "bright-dieffenbachia-6f38db.netlify.app"; // URL del paciente

  const handlePrint = () => {
    document.title = "Reporte de Paciente"; // Cambia el título del documento
    setTimeout(() => {
      window.print();
      document.title = "Tu App"; // Restaura el título después de imprimir
    }, 500);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9MEPt0zWyJ71QuxuCUSNL6MEhz-elJkT4bl9IF_kRThW3eauaK8P1fho6CNHTxK-y6E&usqp=CAU"
            alt="logo"
          />
        </div>
        <h1>
          <span className="title">Historial Clínico del Paciente</span>
        </h1>
        {/* <hr /> */}
      </header>

      <main className="content">
        <section className="patient-info">
          <h1>HISTORIA CLÍNICA</h1>
          <p className="bold">Fecha de Creación del Historial Clínico: 11/08/2021</p>
          <hr />
          <div>
            <h2>Datos del Paciente</h2>
            <p><span className="bold">Nombre y Apellido:</span> Rita Vanessa Santoandre</p>
            <p><span className="bold">DNI:</span> 35.252.162</p>
            <p><span className="bold">Fecha Nacimiento :</span> 08/07/1990</p>
            <p><span className="bold">Edad:</span> 34</p>
          </div>
        </section>

        {/* Sección de consultas dividida en dos mitades */}
        <section className="consultations">
          <div className="consultation">
            <h2>Consulta </h2>
            <p><span className="bold">Fecha de Atención:</span> 07/02/2025</p>
            <p><span className="bold">Especialista:</span> Dra. Mariana Alba Angeloni</p>
            <p><span className="bold">Matrícula Nacional:</span> MN 120445</p>
            <p><span className="bold">Matrícula Provincial:</span> MP 333089</p>

            <h3>Diagnóstico</h3>
            <p>Infección Urinaria</p>

            <h3>Tratamiento Indicado</h3>
            <ul>
              <li>Rp./ GN11053 Ciprofloxacina 500mg - Comprimidos x20 - Cantidad: 1</li>
              <li>Rp./ GN56175 Metronidazol 500mg - Comprimidos x30 - Cantidad: 1</li>
            </ul>

            <h3>Observaciones</h3>
            <p>Se detecta quiste en cuello uterino.</p>

            <h3>Reposo Indicado</h3>
            <p>48 horas de reposo.</p>
          </div>

          <div className="consultation">
            <h2>Consulta </h2>
            <p><span className="bold">Fecha de Atención:</span> 09/02/2025</p>
            <p><span className="bold">Especialista:</span> Dra. Mariana Alba Angeloni</p>

            <h3>Diagnóstico</h3>
            <p>Infección Urinaria</p>

            <h3>Observaciones</h3>
            <p>Control.</p>

            <h3>Reposo Indicado</h3>
            <p>24 horas de reposo.</p>
          </div>
          <div className="consultation">
            <h2>Consulta </h2>
            <p><span className="bold">Fecha de Atención:</span> 02/03/2025</p>
            <p><span className="bold">Especialista:</span> Dra. Mariana Alba Angeloni</p>

            <h3>Diagnóstico</h3>
            <p>Inflamación en zona vaginal con presencia de dolores.</p>

            <h3>Observaciones</h3>
            <p>Quiste en cuello uterino en tratamiento.</p>

            <h3>Reposo Indicado</h3>
            <p>24 horas de reposo.</p>
          </div>
        </section>

        <section className="notes">
          <h2>Notas Adicionales</h2>
          <p>Se recomienda continuar con controles médicos para el seguimiento del tratamiento del quiste en cuello uterino y la evolución de la infección urinaria.</p>
          <p>En caso de persistencia de síntomas o agravamiento, acudir a consulta médica de urgencia.</p>
        </section>

        <section className="signature">
          <p className="bold">Firma y Sello del Profesional</p>
          <p>Dra. Mariana Alba Angeloni</p>
          <p>MN 120445 | MP 333089</p>
          <div className="stamps">
            {/* <img className="stamp" src="sello.png" alt="Sello Médico" /> */}
            <img className="stamp" src="0sello.png" alt="Sello Médico 2" />
          </div>
        </section>
      </main>

      <footer>
        <h4 className="textoqr">Escanea el QR para más información</h4>
        <QRCodeCanvas className="qr" value={patientUrl} size={150} /><br />
        <button className="btn btn-primary mt-3" onClick={handlePrint}>
          🖨️ Imprimir
        </button>
        <div className="print-footer">© Consultorio Médico Privado - Todos los derechos reservados</div>
      </footer>
    </div>
  );
}

export default App;
