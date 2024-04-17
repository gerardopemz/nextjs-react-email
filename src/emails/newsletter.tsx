import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const subscribeUrl = "https://www.youtube.com/@GeraCode?sub_confirmation=1";

export default function Newsletter() {
  return (
    <Html>
      <Head />
      <Preview>Últimas noticias y actualizaciones de @GeraCode</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              alt="@GeraCode"
              style={image}
              src="https://yt3.googleusercontent.com/Q2eyFJCC_AkPNolps1DG3XxSE399iHvPt9qr34zMg7uPiTp74U9JVBXg9kxg1GcrV4VNpyJPcg=s176-c-k-c0x00ffffff-no-rj"
            />
            <Text style={heading}>@GeraCode</Text>
            <Hr style={hr} />
            <Text style={paragraph}>¡Hola a todos!</Text>
            <Text style={paragraph}>
              Espero que estén teniendo una excelente semana. Quiero compartir
              con ustedes las últimas novedades de{" "}
              <Link style={anchor} href={subscribeUrl}>
                @GeraCode
              </Link>
              , mi canal de YouTube donde comparto tutoriales y contenido sobre
              desarrollo web y tecnología.
            </Text>
            <Button style={button} href={subscribeUrl}>
              ¡Suscríbete aquí!
            </Button>
            <Hr style={hr} />
            <Text style={paragraph}>
              Estoy trabajando en varios proyectos interesantes que pronto
              compartiré con todos ustedes. Principalmente desarrollos web con
              React y Next.js, pero también haré tutoriales de otras
              tecnologías, hay mucho contenido emocionante en camino.
            </Text>
            <Text style={paragraph}>
              No se pierdan ningún detalle. Asegúrense de suscribirse a{" "}
              <Link style={anchor} href={subscribeUrl}>
                @GeraCode
              </Link>{" "}
              en YouTube y activar las notificaciones para estar al tanto de
              todas las actualizaciones.
            </Text>
            <Text style={paragraph}>
              ¡Gracias por ser parte de esta comunidad increíble!
            </Text>
            <Text style={paragraph}>
              Saludos,
              <br />
              Gerardo Pérez
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f1f5f9",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto 64px",
  padding: "20px 0 48px",
};

const box = {
  padding: "0 48px",
};

const image = {
  borderRadius: "50%",
  width: "6rem",
  height: "6rem",
  margin: "0 auto",
};

const heading = {
  fontSize: "1.5rem",
  lineHeight: "2rem",
  fontWeight: "600",
  color: "#333",
  textAlign: "center" as const,
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#64748b",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#60a5fa",
};

const button = {
  backgroundColor: "#ef4444",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "12px",
};
