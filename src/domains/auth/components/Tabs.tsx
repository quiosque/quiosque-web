import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminForm } from "./AdminForm";
import { ColaboratorForm } from "./ColaboratorForm";

export function AuthTabs() {
  return (
    <Tabs defaultValue="admin" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="admin">Gestor</TabsTrigger>
        <TabsTrigger value="colaborator">Colaborador</TabsTrigger>
      </TabsList>
      <TabsContent value="admin">
        <AdminForm />
      </TabsContent>

      <TabsContent value="colaborator">
        <ColaboratorForm />
      </TabsContent>
    </Tabs>
  );
}
