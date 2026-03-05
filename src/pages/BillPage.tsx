import { useParams, Link } from "react-router-dom";
import { mockOrders } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Printer, ArrowLeft, Receipt } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function BillPage() {
  const { id } = useParams();
  const order = mockOrders.find((o) => o.id === id);

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Order not found</h2>
            <Button asChild><Link to="/customer/orders">Back to Orders</Link></Button>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = order.items.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = subtotal * 0.1;
  const grandTotal = subtotal + tax;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="container py-8 max-w-2xl">
        <Button asChild variant="ghost" className="mb-4">
          <Link to="/customer/orders"><ArrowLeft className="h-4 w-4 mr-2" /> Back to Orders</Link>
        </Button>

        <Card>
          <CardHeader className="text-center border-b">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-2">
              <Receipt className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl">Digital Receipt</CardTitle>
            <p className="text-muted-foreground">Order {order.id} • {order.date}</p>
          </CardHeader>
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-center">Qty</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.items.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell className="text-center">{item.qty}</TableCell>
                    <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                    <TableCell className="text-right">${(item.price * item.qty).toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-6 border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-sm"><span>Tax (10%)</span><span>${tax.toFixed(2)}</span></div>
              <div className="flex justify-between text-lg font-bold border-t pt-2"><span>Grand Total</span><span className="text-primary">${grandTotal.toFixed(2)}</span></div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button className="flex-1 gap-2" onClick={() => window.print()}>
                <Printer className="h-4 w-4" /> Print Receipt
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <Download className="h-4 w-4" /> Download Bill
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
