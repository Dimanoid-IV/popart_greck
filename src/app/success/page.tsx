import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-md border-border/80 text-center shadow-lg">
        <CardHeader className="items-center pb-2">
          <CheckCircle className="mb-2 size-16 text-primary" aria-hidden />
          <CardTitle className="text-2xl">Order successful</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            Thank you for your order. We have received your art selection and
            our team is preparing it for printing. You will receive a
            confirmation email shortly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button size="lg" className="w-full" render={<Link href="/" />}>
            Back to home
          </Button>
          <p className="text-xs text-muted-foreground">
            Questions? Write to{" "}
            <a
              href="mailto:info@artcanvas.gr"
              className="font-medium text-primary hover:underline"
            >
              info@artcanvas.gr
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
