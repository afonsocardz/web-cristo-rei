"use client";

import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";
import Text from "@/components/ui/Text/Text";
import TextField from "@/components/ui/TextField/TextField";

export default function Admin() {
  return (
    <main className="w-full h-full">
      <div className="flex justify-center items-center w-full h-full">
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
            width: "350px",
            padding: "20px",
          }}
          elevation={4}
        >
          <Text align="center">Painel Administrador</Text>
          <TextField label={"E-mail"} size="small" />
          <TextField label={"Senha"} size="small" />
          <Button variant="contained">Entrar</Button>
        </Card>
      </div>
    </main>
  );
}
