import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useCounter } from '../../context/CounterContext';

const ShowCounter: React.FC = () => {
  const { total, donations } = useCounter();

  return (


    <div className="flex flex-col justify-center items-center h-screen">
      <Card className="w-1/2 rounded-2xl border-2 shadow">
        <CardHeader >
          <CardTitle className="text-center text-6xl">Donaciones</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-green-500 text-center my-12 text-6xl font-bold">${total.toLocaleString()}</h1>
          {donations.length === 0 ? (
            <p className="text-gray-600">No hay donaciones aún.</p>
          ) : (
            <Table className="w-96 mx-auto">
              <TableHeader>
                <TableRow >
                  <TableHead className="text-left w-1/2">Cantidad</TableHead>
                  <TableHead className="text-left w-1/2">Fecha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              {donations.map((donation) => (
                <TableRow key={donation.id}>
                  <TableCell  className="font-medium text-left">${donation.amount.toLocaleString()}</TableCell>
                  <TableCell className="text-left">{new Date(donation.timestamp).toLocaleString()}</TableCell>
                </TableRow>
              ))}
              </TableBody>
            </Table>
             
           
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ShowCounter;
