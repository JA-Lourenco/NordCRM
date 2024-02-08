import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { Pencil, Plus, Search } from "lucide-react";

export function Team() {
  return (
    <>
      <section className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <Input type="text" placeholder="Pesquisar..." className="w-52 mr-2" />

          <Button>
            <Search />
          </Button>
        </div>

        <Button>
          <Plus /> Adicionar
        </Button>
      </section>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Equipe</TableHead>
            <TableHead>Painel</TableHead>
            <TableHead>Editar</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Equipe Ametista</TableCell>
            <TableCell>P001</TableCell>
            <TableCell>
              <Button>
                <Pencil />
              </Button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Equipe Rubi</TableCell>
            <TableCell>P10</TableCell>
            <TableCell>
              <Button>
                <Pencil />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
