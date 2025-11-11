import { useParams } from "react-router-dom";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Footer from "../../components/Footer/Footer";

const posts = [
  {
    slug: "en-tcg-redefinimos-la-cultura-de-atencin-de-nuestros-clientes",
    title: "En TCG redefinimos la cultura de atención de nuestros clientes",
    date: "9 Oct 2025 - 2 min.",
    content: `
      <p>
        La experiencia del cliente es uno de nuestros principales motores, 
        es por ello que buscamos promover la excelencia de la ejecución de cada 
        punto de contacto con el cliente.
      </p>
      <p>
        En TCG redefinimos la cultura de atención y a través de nuestras auditorías 
        en línea generamos experiencias únicas. Entregamos información limpia, 
        oportuna y de calidad a nuestros clientes, con una mirada estratégica y amigable.
      </p>
      <p>
        Utilizamos tecnología avanzada para entregar información en línea de cada uno 
        de los puntos de ventas donde esté tu marca.
      </p>
      <p>¿Cómo lo hacemos?</p>
      <h3>Gestión de Data</h3>
      <p>En nuestros Dashboards de Power BI podrás integrar múltiples fuentes de datos de forma automática. Desarrollamos robots que buscan y correlacionan la información para crear reportes de indicadores clave de Performance en línea. La incorporación de Machine Learning e Inteligencia Artificial, permite una mejor gestión del negocio y eficiente toma de decisiones.</p>
      <img src="https://static.wixstatic.com/media/542a8c_bcb63db6e526434492886e51af8426d7~mv2.png" alt="Reporte de ventas"/>
      <h3>Gestión de Puntos de Venta</h3>
      <p>Con nuestra App TCG Scout, podrás realizar auditorías internas y externas de tus puntos de venta. TCG Scout te permite un control geo-referenciado de la gestión en terreno, sin necesidad de contar con plan de datos.</p>
      <p>Auditorías Externas: Contamos un una extensa red de auditores (Scouts) en Latino-América y el Caribe, para medir la ejecución de tu marca, activaciones y Benchmarks de puntos de venta.</p>
      <p>Auditorías Internas: Utiliza a tu personal en terreno (mercaderistas, supervisores, etc.) para capturar información de tus puntos de venta con nuestra App TCG Scout.</p>
      <img src="https://static.wixstatic.com/media/542a8c_6989b7c92d21484eb5cafa5000da2ee7~mv2.png" alt="Reporte de ventas"/>
      <h3>Ejecución de Puntos de Venta</h3>
      <p>TCG Teleaudit: Nuestro equipo de Teleaudit y QA, analiza y entrega todos los indicadores claves de negocio, con el fin de minimizar el tiempo de gestión en el punto de venta y realizar una medición confiable y eficiente de forma remota, mediante analítica avanzada de imágenes.<p>
      <p>Los Teleaudits pueden realizarse sobre auditorías externas o internas, entregando importantes indicadores como:</p>
      <ul>
        <li>Cumplimiento de Planogramas.</li>
        <li>Participación en góndola (Facing/Share of Shelf).</li>
        <li>Disponibilidad de Stock (OSA/OOS).</li>
        <li>Estrategia de precios (Pricing).</li>
        <li>Exhibiciones pactadas.</li>
        <li>Adyacencias de marcas.</li>
        <li>Exhibiciones especiales.</li>
        <li>Control de inventario.</li>
        <li>Material gráfico (Banners & Ads.)</li>
        <li>Activaciones de marca.</li>
      </ul>
      <h3>Programa de Experiencia de Cliente</h3>
      <p>A través de nuestro Programa de Experiencia de Cliente auditamos los puntos de contactos críticos en el viaje del cliente. Te entregamos información Geo-Referenciada con un nivel de detalle único y en línea.</p>
      <p>En TCG te entregamos las herramientas tecnológicas para controlar todas las áreas de tu negocio. Además, contamos con clientes incógnitos y los mejores sistemas tecnológicos de reportes en línea, para mantener la gestión de los puntos de venta lo más cerca de ti.</p>
    `,
  },
  {
    slug: "en-qu-consiste-una-auditora-de-ejecucin-en-el-punto-de-venta",
    title: "En qué consiste una auditoría de ejecución en el punto de venta",
    date: "23 Sep 2025 - 3 min.",
    content: `
      <p>
        Una auditoría de ejecución de puntos de venta consiste en verificar que las estrategias de tu negocio estén funcionando correctamente en dichos puntos. Es decir, a través de este proceso se monitorea las tiendas para garantizar que los procedimientos se ejecuten de manera correcta.
      </p>
      <img src="${
        import.meta.env.BASE_URL
      }images/blog/banner2.webp" alt="Analisis de puntos de venta"/>
      <p>A través de esta metodología se identifican fallas para proceder a corregirlas, es por ello que se recomienda realizarla de manera periódica. Incluso, podrás contratar una empresa especializada que se encargue de llevar a cabo este procedimiento.</p>
      <h3>¿Cómo funciona?</h3>
      <p>Un auditor se encarga de visitar la tienda para verificar que los estándares establecidos se estén ejecutando de forma correcta. Esta auditoría puede llevarse a cabo de dos maneras: auditoría encubierta, es decir, el personal en tienda es tomado por sorpresa; y auditoría anunciada, es decir, con aviso previo a la visita.</p>
      <p>Los principales elementos observados por el auditor son:</p>
      <ul>
        <li>Condiciones físicas del punto de venta.</li>
        <li>Correcto etiquetado de los productos.</li>
        <li>Exhibición de los productos.</li>
        <li>Validación de inventarios y participación en góndola.</li>
        <li>Precios y promociones visibles.</li>
      </ul>
      <h3>¿Cómo contribuye la auditoría en línea?</h3>
      <p>Gracias a la tecnología avanzada podrás recibir información en línea de cada uno de los puntos de venta donde esté tu marca. Sus principales beneficios son:</p>
      <ul>
        <li>Aumento de la conversión: Antes de que una empresa saque al mercado un producto, ésta habrá realizado con anterioridad una investigación para determinar las necesidades de su segmento. Es decir, ejecutan una estrategia que determina los procedimientos para la disposición del nuevo producto. Seguir estos procesos garantiza el crecimiento de las ventas.</li>
        <li>Identificar fallas de ventas: Identificar fallas y oportunidades de ventas es uno de los principales beneficios de la auditoría de puntos de venta. Además no solo se detecta si es un problema recurrente sino que también se determina los cambios de comportamientos en el consumidor.</li>
      </ul>
      <p>La auditoría de puntos de venta permite adaptar los productos a las condiciones de la demanda, perfeccionando las metodologías de promoción y permitiendo que el sistema de ventas sea más eficiente.</p>
    `,
  },
  {
    slug: "cmo-los-datos-contribuyen-a-la-experiencia-de-compra",
    title: "Cómo los datos contribuyen a la experiencia de compra",
    date: "15 Jun 2025 - 3 min.",
    content: `
      <p>
        Para cualquier negocio los datos representan una fuente de valor que permite obtener información sobre los clientes y potenciales clientes. El Big Data llegó a las organizaciones para generar mayores beneficios, reducir costes, aumentar la fidelidad de los clientes, y crear ventajas competitivas. 
      </p>
      <img src="${
        import.meta.env.BASE_URL
      }images/blog/banner3.webp" alt="Big Data"/>
      <p>En el retail la obtención de datos y métricas es esencial para la evolución de las estrategias. La interacción del comportamiento del consumidor con la marca es una de las principales vertientes que se mide con frecuencia.</p>
      <p>Esto conlleva a que uno de los principales objetivos de la obtención de datos sea poder obtener métricas confiables sobre el comportamiento del cliente. Al obtener estos resultados, la toma de decisiones son más pertinentes entorno al negocio. Tener un mayor conocimiento del cliente permite:</p>
      <ul>
        <li>Mejorar la experiencia del cliente.</li>
        <li>Optimizar el rendimiento de las campañas de marketing.</li>
      </ul>
      <p>Es por ello que los datos permiten incrementar los ingresos y reducir los costos, obteniendo un mayor rendimiento comercial.</p>
      <p>Para tener el mayor conocimiento sobre lo que sucede en un negocio, se debe medir tanto lo que ocurre en las tiendas físicas como lo que sucede a nivel digital.
      Para obtener los datos online se suele recurrir a herramientas que lleven a cabo los seguimientos correspondientes y se encarguen de registrar el recorrido del consumidor, mostrando finalmente los datos correspondientes.</p>
      <p>Por otro lado, para medir los datos offline se requiere de sistemas que monitoricen el comportamiento de los potenciales clientes y vuelquen los datos a una plataforma de visualización.</p>
      <p>En TCG Latam podrás acceder a toda la información crítica de tu negocio con el Programa de Experiencia de Clientes. Ventas, cumplimientos y análisis de cada punto de contacto desde una misma herramienta, incorporando mediciones en terreno de nuestra red de auditores y tu equipo de campo.</p>
    `,
  },
  {
    slug: "cmo-la-gestin-de-datos-aporta-a-la-cadena-de-suministro",
    title: "Cómo la gestión de datos aporta a la cadena de suministro",
    date: "7 Abr 2025 - 4 min.",
    content: `
      <p>
        En la actualidad los esfuerzos de las empresas de consumo masivo están concentrados en asegurar que sus productos lleguen al consumidor de la manera más efectiva, lo cual conlleva a mejorar las cadenas de suministro para optimizar los procesos.
      </p>
      <img src="${
        import.meta.env.BASE_URL
      }images/blog/banner4.webp" alt="Cadena de suministros"/>
      <p>Ante el escenario al cual nos enfrentamos en la actualidad debido al COVID-19, se presentan nuevos desafíos. La Globalización, el desarrollo de la tecnología y la cantidad de información que reciben los clientes cada día aumentan sus expectativas.</p>
      <p>Para poder cumplir con las exigencias del cliente, como la necesidad de adquirir un producto en el momento y en el lugar que ellos lo deseen, la logística se ha convertido en uno de los principales ejes de las empresas. Sus esfuerzos se concentran en asegurar que el producto llegue al consumidor de la manera más efectiva y esto implica mejorar las cadenas de suministro para optimizar los procesos.</p>
      <p>Con las exigencias del nuevo mercado, como lo es el comercio electrónico, ya no es suficiente con el buen estado del producto, también lo es el tiempo de envío.</p>
      <p>La cadena de suministro o de abastecimiento se define en la industria del comercio moderno como una red de compañías y medios de distribución involucrados en los diferentes procesos y actividades que producen valor en la forma en que un producto llega al consumidor final.</p>
      <p>Hasta hace algún tiempo la principal labor de quienes gestionan esta cadena eran el abastecimiento, la rebaja y gestión de costes y el cumplimiento con los usuarios. Tras la irrupción de la tecnología, el Big Data y la IA, su papel pasó a ser absolutamente estratégico y actualmente se les pide habilidades para contener costes y mejorar las ventas.</p>
      <p>Ante este nuevo escenario se requiere obtener datos limpios, coherentes y conectados, siendo necesario también un acceso a éstos en el momento en que hacen falta, ya sea con la finalidad de realizar análisis o durante el transcurso de la actividad.</p>
    `,
  },
  {
    slug: "como-han-cambiado-los-hbitos-en-el-retail-despues-de-la-pandemia",
    title: "Como han cambiado los hábitos en el retail despues de la pandemia",
    date: "9 Mar 2025 - 6 min.",
    content: `
      <p>Durante estos últimos años muchos han sido los cambios producto, siendo el consumo el principal medidor de las transformaciones de la sociedad.</p>
      <img src="${
        import.meta.env.BASE_URL
      }images/blog/banner5.webp" alt="Imagen de Retail"/>
      <p>El comportamiento de los seres humanos ha sido modificado por el confinamiento y la ansiedad de no saber qué pasará en el futuro. La forma en que nos relacionamos e interactuamos con el resto de las personas ha conllevado un cambio de rutina, cambiando a su vez los hábitos y tendencias de consumo.</p>
      <p>Los nuevos estudios que se han generado entorno al comportamiento del consumidor debido a la emergencia sanitaria han servido de brújula para el sector retail. A través de estos resultados la industria puede conocer las nuevas necesidades que tienen los consumidores y la forma en que deberán adaptarse a estos cambios.</p>
      <p>La disminución en el tráfico a tiendas físicas como supermercados, tiendas comerciales, farmacias, restaurantes, entre otros sectores ha sido evidente. La tendencia a limitar las salidas del hogar ha priorizado las compras en línea, sin duda, una tendencia generalizada a nivel global.</p>
      <p>Los nuevos hábitos del consumidor también se han evidenciado en la cantidad de horas que destinan para abastecerse en el supermercado, así como en la cantidad de compras que se realizan cada mes. Los horarios y días de preferencia también cambiaron, los días de mayor afluencia a los supermercados previo a la cuarentena solían ser los fines de semana. Tras la cuarentena, las compras pasaron a estar más repartida en la semana.</p>
      <p>Las principales tendencias en el sector llaman a focalizarse en los cambios en la pauta de consumo y en la transformación de los puntos de venta. Además, uno de los grandes retos para las empresas será tener un stock único para realizar la venta y contar con grandes existencias en tienda para poder atender rápidamente a los pedidos online. </p>
    `,
  },
  {
    slug: "la-inteligencia-artificial-y-el-machine-learning-combinado-con-big-data",
    title:
      "La Inteligencia Artificial y el Machine Learning combinado con Big Data",
    date: "27 Ene 2025 - 3 min.",
    content: `
      <p>Durante la crisis actual el Big Data ha sido una de las herramientas más utilizadas para combatir sus efectos.</p>
      <img src="${
        import.meta.env.BASE_URL
      }images/blog/banner6.webp" alt="Imagen de Inteligencia Artificial"/>
      <p>El término Big Data hace referencia a la gran cantidad de datos, estructurados como no estructurados, que engloban a las organizaciones en la actualidad. Estos datos pueden ser utilizados en la toma de decisiones y en los movimientos estratégicos del negocio.</p>
      <p>Recopilar y analizar datos en tiempo real es esencial para la toma de decisiones en tiempos de crisis como el que se vive actualmente a nivel global. El contar con información de calidad y hacer una buena gestión de los datos es fundamental para el buen uso del Big Data en las organizaciones.</p>
      <p>Adicional al Big Data existen dos elementos que en combinación lograrán el cambio en tiempo de crisis. La incorporación de Inteligencia Artificial (IA) y Machine Learning permiten una mejor gestión del negocio, logrando ser más eficientes en la toma decisiones.</p>
      <p>A través de los datos los dispositivos de Inteligencia Artificial aprenderán a identificar cómo piensan y sienten los seres humanos. Acelerando su curva de aprendizaje y permitiendo además la automatización del análisis de datos.</p>
      <p>En la actualidad la IA es capaz de aprender sin apoyo humano por medio del Machine Learning o aprendizaje automático; y el Big Data será el combustible que potencia la Inteligencia Artificial a través de:</p>
      <ul>
        <li>La tecnología del Big Data.</li>
        <li>Disponibilidad de grandes conjuntos de datos.</li>
        <li>Machine Learning a escala.</li>
      </ul>
      <p>La Inteligencia Artificial, el Machine Learning combinado con el Big Data y la gestión de datos, les brindan a las empresas la oportunidad de obtener competencia analítica, además de lograr tomar decisiones en tiempo real.</p>
      <img src="https://static.wixstatic.com/media/542a8c_65b17d7f467c4ea19e2d206d3e591314~mv2.png" alt="Imagen donde se muestra el mapa global de seek y display"/>
      <p>En TCG Latam contamos con reportes de gestión de data, como el que tenemos disponible sobre la evolución a nivel mundial del COVID-19. ¡Te invitamos a conocer todas las herramientas que te brindamos para hacer crecer tu negocio!</p>
    `,
  },
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Typography variant="h2" color="primary" fontWeight={700} mb={6}>
        Artículo no encontrado
      </Typography>
    );
  }

  const baseUrl = "https://www.tcgscout.com/blog";
  const postUrl = `${baseUrl}/${slug ?? ""}`;

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      postUrl
    )}`,
    x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      post.title
    )}&url=${encodeURIComponent(postUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      postUrl
    )}`,
  };

  return (
    <>
      <Grid
        container
        spacing={4}
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        pt={8}
        pb={5}
        px={2}
        mx={"auto"}
        sx={{ maxWidth: "1488px" }}
      >
        <Box>
          <Box display={"flex"} alignItems={"center"} gap={2} mb={2}>
            <Box
              component="img"
              src="${import.meta.env.BASE_URL}images/blog/support.webp"
              alt="Icono de Soporte TCG Scout"
              sx={{
                borderRadius: "16px 16px 0 0",
                width: "60px",
              }}
            />
            <Box
              display="flex"
              flexDirection={"column"}
              alignItems={"start"}
              gap={0.5}
            >
              <Typography variant="subtitle1" fontWeight={500} color="#B2B2B2">
                TCG Scout Support
              </Typography>
              <Typography
                variant="subtitle2"
                fontSize={16}
                fontWeight={600}
                textAlign={"center"}
                color="primary"
              >
                {post.date}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h2" color="primary" fontWeight={700} mb={4}>
            {post.title}
          </Typography>
          <Box
            dangerouslySetInnerHTML={{ __html: post.content }}
            sx={{
              "& p": {
                fontSize: "1.125rem",
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.2,
                letterSpacing: "-.04rem",
                margin: "0 0 32px 0",
              },
              "& h3": {
                fontFamily: "TWKLausanne, Arial, sans-serif",
                fontWeight: 600,
                fontSize: "1.5rem",
                lineHeight: 1.2,
                letterSpacing: "-0.04rem",
                textDecoration: "underline",
                margin: "0 0 32px 0",
              },
              "& img": {
                width: "100%",
                height: "700px",
                objectFit: "cover",
                borderRadius: "8px",
                margin: "0 0 32px 0",

                "@media (max-width: 900px)": {
                  height: "auto",
                },
              },
              "& ul": {
                margin: "0 0 32px 0",
              },
              "& li": {
                fontSize: "1.125rem",
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.2,
                letterSpacing: "-.04rem",
              },
            }}
          />
          <Divider sx={{ width: "100%", my: 3 }} />

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box display={"flex"} gap={3}>
              <Box
                component="a"
                href={shareUrls.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src="${import.meta.env.BASE_URL}images/facebook_logo.svg"
                  alt="Facebook de TCG Scout"
                  sx={{
                    width: "32px",
                    height: "32px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                />
              </Box>

              <Box
                component="a"
                href={shareUrls.x}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src="${import.meta.env.BASE_URL}images/x_logo.svg"
                  alt="X (Twitter) de TCG Scout"
                  sx={{
                    width: "32px",
                    height: "32px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                />
              </Box>

              <Box
                component="a"
                href={shareUrls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src="${import.meta.env.BASE_URL}images/linkedin_logo.svg"
                  alt="LinkedIn de TCG Scout"
                  sx={{
                    width: "32px",
                    height: "32px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Divider sx={{ width: "100%", my: 3 }} />
        </Box>
      </Grid>
      <Footer />
    </>
  );
}
