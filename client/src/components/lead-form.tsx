import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { submitLead } from "@/services/api";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  whatsapp: z.string().min(10, "WhatsApp inválido"),
  instagram: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
  utm_term: z.string().optional(),
});

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      instagram: "",
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
      utm_content: searchParams.get("utm_content") || "",
      utm_term: searchParams.get("utm_term") || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);

    try {
      await submitLead({
        name: values.name,
        whatsapp: values.whatsapp,
        instagram: values.instagram,
        utm_source: values.utm_source,
        utm_medium: values.utm_medium,
        utm_campaign: values.utm_campaign,
        utm_content: values.utm_content,
        utm_term: values.utm_term,
      });

      setSubmitted(true);
    } catch (err) {
      setError("Ocorreu um erro. Por favor, tente novamente.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  if (submitted) {
    return (
      <Card className="w-full max-w-[900px] mx-auto bg-gradient-to-b from-[#1a1a1a]/90 to-[#000000]/90 border-none backdrop-blur-md shadow-2xl p-12 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="h-20 w-20 rounded-full bg-accent/20 flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10 text-accent" />
          </div>
          <h2 className="text-3xl font-bold text-white font-display">Obrigado!</h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Recebemos suas informações. Um de nossos especialistas entrará em contato em breve.
          </p>
        </motion.div>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ rotateX: -10, y: 40, opacity: 0 }}
      whileInView={{ rotateX: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 1
      }}
      style={{ perspective: 1000 }}
      className="w-full max-w-[920px] mx-auto"
    >
      <Card className="w-full bg-gradient-to-b from-[#1a1a1a]/95 to-[#000000]/95 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(255,208,0,0.05)] overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column: Info */}
            <div className="p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 bg-black/40">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display tracking-tight leading-tight">
                Vamos crescer juntos?
              </h2>
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                Preencha o formulário e agende sua análise gratuita.
              </p>

              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-accent">
                  <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-accent shadow-[0_0_10px_rgba(255,208,0,0.5)]" />
                  <h3 className="text-accent font-bold text-sm uppercase tracking-wider mb-1">Passo 1</h3>
                  <p className="text-white font-medium text-lg">Complete o formulário</p>
                  <p className="text-muted-foreground text-sm mt-1">Forneça suas informações de contato. </p>
                  <p className="text-muted-foreground text-sm mt-1">Garantimos a segurança total dos seus dados.</p>
                </div>

                <div className="relative pl-6 border-l-2 border-white/20">
                  <span className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-muted-foreground" />
                  <h3 className="text-muted-foreground font-bold text-sm uppercase tracking-wider mb-1">Passo 2</h3>
                  <p className="text-white font-medium text-lg">Nós entraremos em Contato </p>
                  <p className="text-muted-foreground text-sm mt-1">Nas próximas horas entraremos em contato para agendar a sua reunião.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="p-8 md:p-10 bg-white/[0.02]">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Nome do responsável</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome"
                            {...field}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 focus:border-accent focus:ring-accent/20 transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">WhatsApp</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(00) 9 9999-9999"
                            {...field}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 focus:border-accent focus:ring-accent/20 transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="instagram"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Seu @ no Instagram</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="@seuperfil"
                            {...field}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 focus:border-accent focus:ring-accent/20 transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-14 text-lg font-bold bg-[#FFD000] hover:bg-[#E6BC00] text-black rounded-lg shadow-[0_4px_20px_rgba(255,208,0,0.3)] hover:shadow-[0_8px_30px_rgba(255,208,0,0.4)] transition-all duration-300 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Enviando..." : "Enviar"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}