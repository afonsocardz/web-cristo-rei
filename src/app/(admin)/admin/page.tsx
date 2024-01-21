"use client";

import Card from "@/components/ui/Card/Card";
import TextField from "@/components/ui/TextField/TextField";

export default function Admin() {
  return (
    <main className="w-full">
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
          <TextField label={"E-mail"} size="small" />
          <TextField label={"Senha"} size="small" />
        </Card>
      </div>
    </main>
  );
}
