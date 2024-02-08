import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { Pencil } from "lucide-react";

export function Customer() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Telefone</TableHead>
          <TableHead>Tipo Pessoa</TableHead>
          <TableHead>Editar</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell>Ricardo Oliveira</TableCell>
          <TableCell>38 985258525</TableCell>
          <TableCell>PF</TableCell>
          <TableCell>
            <Button>
              <Pencil />
            </Button>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Victor Ramos</TableCell>
          <TableCell>12 996539653</TableCell>
          <TableCell>PF</TableCell>
          <TableCell>
            <Button>
              <Pencil />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
