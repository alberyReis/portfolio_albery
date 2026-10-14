import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { Link } from "../Link/Link";
import { Color } from "../../utils/colors/colors";

export const Home = () => {
    return (
        <section
            id="home"
            style={{
                width: "100%",
                minHeight: "100svh",
                display: "flex",
                alignItems: "center",
                paddingBlock: "6rem",
                boxSizing: "border-box",
            }}
        >
            <Container>
                <div
                    style={{
                        maxWidth: "850px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "1.5rem",
                    }}
                >
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.65rem",
                            color: Color.PRIMARY,
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                        }}
                    >
                        <span
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: Color.PRIMARY,
                            }}
                        />
                        Desenvolvedor de Software
                    </span>

                    <h1
                        style={{
                            color: Color.TEXT_PRIMARY,
                            fontSize: "clamp(2.75rem, 6vw, 5rem)",
                            fontWeight: 700,
                            lineHeight: 1.08,
                            letterSpacing: "-0.05em",
                            margin: 0,
                        }}
                    >
                        Desenvolvendo experiências digitais com{" "}
                        <span style={{ color: Color.PRIMARY }}>
                            React e React Native.
                        </span>
                    </h1>

                    <p
                        style={{
                            maxWidth: "650px",
                            color: Color.TEXT_SECONDARY,
                            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                            lineHeight: 1.8,
                        }}
                    >
                        Sou desenvolvedor de software com foco em aplicações web e
                        mobile. Transformo ideias em interfaces funcionais, acessíveis
                        e bem estruturadas.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "1rem",
                            marginTop: "0.5rem",
                        }}
                    >
                        <Button
                            variant="primary"
                            size="large"
                            onClick={() => {
                                document
                                    .getElementById("projects")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Ver projetos
                        </Button>
                        <Link
                            href="#contact"
                            variant="secondary"
                            weight={600}
                            style={{
                                padding: "0.875rem 0",
                            }}
                        >
                            Entrar em contato →
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};
