import React from "react";
import "./About.css";
import { Panel } from "primereact/panel";
import Logo from "../../assets/logo192.png";

import Header from "../../components/common/Header";

export default function About() {
  return (
    <div>
      <Header text="Acerca de Distribuidora Faby" />
      <img src={Logo} alt="logo192" />

      <Panel header="CONTACTO" className="panel" toggleable>
        <p>
          Correo: <b>fabydistrib@gmail.com</b>
        </p>
        <p>
          WhatsApp: <b>+503 7396-9289</b>
        </p>
        <p>
          Facebook:{" "}
          <a href="https://www.facebook.com/Distribuidora-Faby-101103272055255">
            <i className="pi pi-facebook"></i> Ir a Facebook
          </a>
        </p>
        <p>
          Twitter:{" "}
          <a href="https://www.facebook.com/Distribuidora-Faby-101103272055255">
            <i className="pi pi-twitter"></i> Ir a Twitter
          </a>
        </p>
      </Panel>

      <Panel header="FAQ's" className="panel" toggleable>
        <Panel header="¿Donde están ubicados?" className="panel" toggleable>
          <p>Somos una tienda en linea, no tenemos un local.</p>
        </Panel>
        <Panel header="¿Envío gratuito?" className="panel" toggleable>
          <p>
            El envío es gratuito por compras mayores al consumo mínimo ($5){" "}
          </p>
        </Panel>
        <Panel header="¿Hacia donde hay envíos?" className="panel" toggleable>
          <p>De momento solo en el área metropolitada de Santa Ana.</p>
        </Panel>
      </Panel>

      <Panel header="POLÍTICA DE PRIVACIDAD" className="panel" toggleable>
        <p>
          El presente Política de Privacidad establece los términos en que
          Distribuidora Faby usa y protege la información que es proporcionada
          por sus usuarios al momento de utilizar su sitio web. Esta compañía
          está comprometida con la seguridad de los datos de sus usuarios.
          Cuando le pedimos llenar los campos de información personal con la
          cual usted pueda ser identificado, lo hacemos asegurando que sólo se
          empleará de acuerdo con los términos de este documento. Sin embargo
          esta Política de Privacidad puede cambiar con el tiempo o ser
          actualizada por lo que le recomendamos y enfatizamos revisar
          continuamente esta página para asegurarse que está de acuerdo con
          dichos cambios.
          <br />
          <br />
          <b>INFORMACIÓN QUE ES RECOGIDA</b>
          <br />
          Nuestro sitio web podrá recoger información personal por ejemplo:
          Nombre, información de contacto como su dirección de correo
          electrónica e información demográfica. Así mismo cuando sea necesario
          podrá ser requerida información específica para procesar algún pedido
          o realizar una entrega o facturación.
          <br />
          <br />
          <b>USO DE LA INFORMACIÓN RECOGIDA</b>
          <br />
          Nuestro sitio web emplea la información con el fin de proporcionar el
          mejor servicio posible, particularmente para mantener un registro de
          usuarios, de pedidos en caso que aplique, y mejorar nuestros productos
          y servicios. Es posible que sean enviados correos electrónicos
          periódicamente a través de nuestro sitio con ofertas especiales,
          nuevos productos y otra información publicitaria que consideremos
          relevante para usted o que pueda brindarle algún beneficio, estos
          correos electrónicos serán enviados a la dirección que usted
          proporcione y podrán ser cancelados en cualquier momento.
          Distribuidora Faby está altamente comprometido para cumplir con el
          compromiso de mantener su información segura. Usamos los sistemas más
          avanzados y los actualizamos constantemente para asegurarnos que no
          exista ningún acceso no autorizado.
          <br />
          <br />
          <b>COOKIES</b>
          <br />
          Una cookie se refiere a un fichero que es enviado con la finalidad de
          solicitar permiso para almacenarse en su ordenador, al aceptar dicho
          fichero se crea y la cookie sirve entonces para tener información
          respecto al tráfico web, y también facilita las futuras visitas a una
          web recurrente. Otra función que tienen las cookies es que con ellas
          las web pueden reconocerte individualmente y por tanto brindarte el
          mejor servicio personalizado de su web. Nuestro sitio web emplea las
          cookies para poder identificar las páginas que son visitadas y su
          frecuencia. Esta información es empleada únicamente para análisis
          estadístico y después la información se elimina de forma permanente.
          Usted puede eliminar las cookies en cualquier momento desde su
          ordenador. Sin embargo las cookies ayudan a proporcionar un mejor
          servicio de los sitios web, estás no dan acceso a información de su
          ordenador ni de usted, a menos de que usted así lo quiera y la
          proporcione directamente, . Usted puede aceptar o negar el uso de
          cookies, sin embargo la mayoría de navegadores aceptan cookies
          automáticamente pues sirve para tener un mejor servicio web. También
          usted puede cambiar la configuración de su ordenador para declinar las
          cookies. Si se declinan es posible que no pueda utilizar algunos de
          nuestros servicios.
          <br />
          <br />
          <b>ENLACES A TERCEROS</b>
          <br />
          Este sitio web pudiera contener en laces a otros sitios que pudieran
          ser de su interés. Una vez que usted de clic en estos enlaces y
          abandone nuestra página, ya no tenemos control sobre al sitio al que
          es redirigido y por lo tanto no somos responsables de los términos o
          privacidad ni de la protección de sus datos en esos otros sitios
          terceros. Dichos sitios están sujetos a sus propias políticas de
          privacidad por lo cual es recomendable que los consulte para confirmar
          que usted está de acuerdo con estas.
          <br />
          <br />
          <b>CONTROL DE SU INFORMACIÓN PERSONAL</b>
          <br />
          En cualquier momento usted puede restringir la recopilación o el uso
          de la información personal que es proporcionada a nuestro sitio web.
          Cada vez que se le solicite rellenar un formulario, como el de alta de
          usuario, puede marcar o desmarcar la opción de recibir información por
          correo electrónico. En caso de que haya marcado la opción de recibir
          nuestro boletín o publicidad usted puede cancelarla en cualquier
          momento. Esta compañía no venderá, cederá ni distribuirá la
          información personal que es recopilada sin su consentimiento, salvo
          que sea requerido por un juez con un orden judicial. Distribuidora
          Faby Se reserva el derecho de cambiar los términos de la presente
          Política de Privacidad en cualquier momento.
        </p>
      </Panel>

      <Panel header="TÉRMINOS Y CONDICIONES" className="panel" toggleable>
        <p>
          <b>INFORMACIÓN RELEVANTE</b>
          <br />
          Es requisito necesario para la adquisición de los productos que se
          ofrecen en este sitio, que lea y acepte los siguientes Términos y
          Condiciones que a continuación se redactan. El uso de nuestros
          servicios así como la compra de nuestros productos implicará que usted
          ha leído y aceptado los Términos y Condiciones de Uso en el presente
          documento. Todas los productos que son ofrecidos por nuestro sitio web
          pudieran ser creadas, cobradas, enviadas o presentadas por una página
          web tercera y en tal caso estarían sujetas a sus propios Términos y
          Condiciones. En algunos casos, para adquirir un producto, será
          necesario el registro por parte del usuario, con ingreso de datos
          personales fidedignos y definición de una contraseña. El usuario puede
          elegir y cambiar la clave para su acceso de administración de la
          cuenta en cualquier momento, en caso de que se haya registrado y que
          sea necesario para la compra de alguno de nuestros productos.
          Distribuidora Faby.com no asume la responsabilidad en caso de que
          entregue dicha clave a terceros. Todas las compras y transacciones que
          se lleven a cabo por medio de este sitio web, están sujetas a un
          proceso de confirmación y verificación, el cual podría incluir la
          verificación del stock y disponibilidad de producto, validación de la
          forma de pago, validación de la factura (en caso de existir) y el
          cumplimiento de las condiciones requeridas por el medio de pago
          seleccionado. En algunos casos puede que se requiera una verificación
          por medio de correo electrónico. Los precios de los productos
          ofrecidos en esta Tienda Online es válido solamente en las compras
          realizadas en este sitio web.
          <br />
          <br />
          <b>LICENCIA</b>
          <br />
          Distribuidora Faby a través de su sitio web concede una licencia para
          que los usuarios utilicen los productos que son vendidos en este sitio
          web de acuerdo a los Términos y Condiciones que se describen en este
          documento.
          <br />
          <br />
          <b>USO NO AUTORIZADO</b>
          <br />
          En caso de que aplique (para venta de software, templetes, u otro
          producto de diseño y programación) usted no puede colocar uno de
          nuestros productos, modificado o sin modificar, en un CD, sitio web o
          ningún otro medio y ofrecerlos para la redistribución o la reventa de
          ningún tipo.
          <br />
          <br />
          <b>PROPIEDAD</b>
          <br />
          Usted no puede declarar propiedad intelectual o exclusiva a ninguno de
          nuestros productos, modificado o sin modificar. Todos los productos
          son propiedad de los proveedores del contenido. En caso de que no se
          especifique lo contrario, nuestros productos se proporcionan sin
          ningún tipo de garantía, expresa o implícita. En ningún esta compañía
          será responsables de ningún daño incluyendo, pero no limitado a, daños
          directos, indirectos, especiales, fortuitos o consecuentes u otras
          pérdidas resultantes del uso o de la imposibilidad de utilizar
          nuestros productos.
          <br />
          <br />
          <b>POLÍTICA DE REEMBOLSO Y GARANTÍA</b>
          <br />
          En el caso de productos que sean mercancías irrevocables no-tangibles,
          no realizamos reembolsos después de que se envíe el producto, usted
          tiene la responsabilidad de entender antes de comprarlo. Le pedimos
          que lea cuidadosamente antes de comprarlo. Hacemos solamente
          excepciones con esta regla cuando la descripción no se ajusta al
          producto. Hay algunos productos que pudieran tener garantía y
          posibilidad de reembolso pero este será especificado al comprar el
          producto. En tales casos la garantía solo cubrirá fallas de fábrica y
          sólo se hará efectiva cuando el producto se haya usado correctamente.
          La garantía no cubre averías o daños ocasionados por uso indebido. Los
          términos de la garantía están asociados a fallas de fabricación y
          funcionamiento en condiciones normales de los productos y sólo se
          harán efectivos estos términos si el equipo ha sido usado
          correctamente. Esto incluye:
        </p>
        <ul>
          <li>
            De acuerdo a las especificaciones técnicas indicadas para
            cadaproducto.
          </li>
          <li>
            En condiciones ambientales acorde con las especificaciones indicadas
            por el fabricante.
          </li>
          <li>
            En uso específico para la función con que fue diseñado de fábrica.
          </li>
          <li>
            En condiciones de operación eléctricas acorde con las
            especificaciones y tolerancias indicadas.
          </li>
        </ul>
        <br />
        <p>
          <b>COMPROBACIÓN ANTIFRAUDE</b>
          <br />
          La compra del cliente puede ser aplazada para la comprobación
          antifraude. También puede ser suspendida por más tiempo para una
          investigación más rigurosa, para evitar transacciones fraudulentas.
          <br />
          <br />
          <b>PRIVACIDAD</b>
          <br />
          Este Distribuidora Faby.com garantiza que la celta de vigo noticias
          información personal que usted envía cuenta con la seguridad
          necesaria. Los datos ingresados por usuario o en el caso de requerir
          una validación de los pedidos no serán entregados a terceros, salvo
          que deba ser revelada en cumplimiento a una orden judicial o
          requerimientos legales. La suscripción a boletines de correos
          electrónicos publicitarios es voluntaria y podría ser seleccionada al
          momento de crear su cuenta. Distribuidora Faby reserva los derechos de
          cambiar o de modificar estos términos sin previo aviso.  
        </p>
      </Panel>
    </div>
  );
}
