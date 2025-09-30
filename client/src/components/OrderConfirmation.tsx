import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

interface OrderConfirmationProps {
  orderId: string;
  customerName: string;
  email: string;
  total: number;
}

export default function OrderConfirmation({ 
  orderId, 
  customerName, 
  email, 
  total 
}: OrderConfirmationProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Card className="text-center">
        <CardContent className="pt-12 pb-12 space-y-6">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground">
              Thank you for supporting cancer research, {customerName}
            </p>
          </div>

          <Card className="bg-muted/30 max-w-md mx-auto">
            <CardContent className="pt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Order Number</span>
                <span className="font-mono font-semibold" data-testid="text-order-id">
                  #{orderId}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total</span>
                <span className="font-semibold" data-testid="text-order-total">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Confirmation sent to</span>
                <span className="font-medium" data-testid="text-order-email">
                  {email}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20 max-w-md mx-auto">
            <CardContent className="pt-6">
              <p className="text-sm font-medium">
                100% of your purchase goes directly to cancer research.
                You're making a difference in the fight against cancer!
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/">
              <Button variant="default" data-testid="button-continue-shopping">
                Continue Shopping
              </Button>
            </Link>
            <Button 
              variant="outline"
              onClick={() => window.print()}
              data-testid="button-print-receipt"
            >
              Print Receipt
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
