import { notFound } from "next/navigation";
import { ArrowRight, Check, ShoppingCart } from "lucide-react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  FormField,
  Input,
  Select,
  Skeleton,
  Spinner,
  Textarea,
} from "@/components/ui";
import { formatDate, formatVND } from "@/lib/format";

const colorTokens = [
  ["background", "bg-background"],
  ["surface", "bg-surface"],
  ["foreground", "bg-foreground"],
  ["muted-foreground", "bg-muted-foreground"],
  ["border", "bg-border"],
  ["primary", "bg-primary"],
  ["primary-hover", "bg-primary-hover"],
  ["primary-soft", "bg-primary-soft"],
  ["success", "bg-success"],
  ["success-soft", "bg-success-soft"],
  ["warning", "bg-warning"],
  ["warning-soft", "bg-warning-soft"],
  ["danger", "bg-danger"],
  ["danger-soft", "bg-danger-soft"],
  ["info", "bg-info"],
  ["info-soft", "bg-info-soft"],
  ["price", "bg-price"],
] as const;

const buttonVariants = ["primary", "secondary", "outline", "ghost", "danger"] as const;
const badgeVariants = ["neutral", "primary", "success", "warning", "danger", "info"] as const;

export default function UiPreviewPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main className="py-10 sm:py-14">
      <Container className="space-y-12">
        <header className="space-y-2 border-b border-border pb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Development only</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">UI component preview</h1>
          <p className="max-w-2xl text-muted-foreground">Shared design tokens and foundational components for ComputerStore.</p>
        </header>

        <section className="space-y-5" aria-labelledby="tokens-heading">
          <SectionHeading id="tokens-heading" title="Color tokens" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {colorTokens.map(([name, colorClass]) => (
              <div key={name} className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
                <div className={`h-16 ${colorClass}`} />
                <p className="px-3 py-2 text-sm font-medium">{name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5" aria-labelledby="buttons-heading">
          <SectionHeading id="buttons-heading" title="Button" />
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {buttonVariants.map((variant) => <Button key={variant} variant={variant}>{variant}</Button>)}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button><Button size="md">Medium</Button><Button size="lg">Large</Button>
              <Button loading>Loading</Button><Button disabled>Disabled</Button>
              <Button leftIcon={<ShoppingCart size={16} />}>Add to cart</Button>
              <Button variant="outline" rightIcon={<ArrowRight size={16} />}>Continue</Button>
            </div>
            <Button fullWidth>Full width</Button>
          </div>
        </section>

        <section className="space-y-5" aria-labelledby="fields-heading">
          <SectionHeading id="fields-heading" title="Form controls" />
          <div className="grid gap-5 md:grid-cols-2">
            <FormField id="preview-name" label="Full name" required hint="Shown on your order receipt.">
              <Input placeholder="Nguyen Van A" />
            </FormField>
            <FormField id="preview-email" label="Email" error="Please enter a valid email address." required>
              <Input type="email" placeholder="name@example.com" invalid />
            </FormField>
            <FormField id="preview-category" label="Category">
              <Select defaultValue="">
                <option value="" disabled>Select a category</option><option value="laptop">Laptop</option><option value="desktop">Desktop</option>
              </Select>
            </FormField>
            <FormField id="preview-note" label="Note" hint="Up to 500 characters.">
              <Textarea placeholder="Add a note" />
            </FormField>
            <Input placeholder="Disabled input" disabled />
            <Select disabled defaultValue="disabled"><option value="disabled">Disabled select</option></Select>
          </div>
        </section>

        <section className="space-y-5" aria-labelledby="cards-heading">
          <SectionHeading id="cards-heading" title="Card" />
          <Card className="max-w-xl">
            <CardHeader><CardTitle>Order summary</CardTitle><p className="text-sm text-muted-foreground">Your selected items</p></CardHeader>
            <CardContent><div className="flex items-center justify-between text-sm"><span>Mechanical keyboard</span><strong>{formatVND(1290000)}</strong></div></CardContent>
            <CardFooter className="justify-between border-t border-border pt-4"><span className="text-sm text-muted-foreground">Updated {formatDate(new Date())}</span><Button size="sm">Checkout</Button></CardFooter>
          </Card>
        </section>

        <section className="space-y-5" aria-labelledby="badges-heading">
          <SectionHeading id="badges-heading" title="Badge" />
          <div className="flex flex-wrap gap-3">{badgeVariants.map((variant) => <Badge key={variant} variant={variant}>{variant}</Badge>)}</div>
        </section>

        <section className="space-y-5" aria-labelledby="feedback-heading">
          <SectionHeading id="feedback-heading" title="Feedback and loading" />
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3"><Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" /></div>
            <div className="flex items-center gap-3"><Skeleton className="h-10 w-10 rounded-full" /><Skeleton className="h-4 w-48" /><Skeleton className="h-4 w-24" /></div>
            <span className="inline-flex items-center gap-2 text-sm text-success"><Check size={16} /> Saved successfully</span>
          </div>
        </section>
      </Container>
    </main>
  );
}

function SectionHeading({ id, title }: { id: string; title: string }) {
  return <h2 id={id} className="text-xl font-semibold tracking-tight">{title}</h2>;
}