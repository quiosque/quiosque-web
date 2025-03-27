import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Package } from "lucide-react";
import { useMemo } from "react";

interface Product {
  name: string
  quantity: number
  value: number
}

function generateColorFromString(str: string) {
  // Gera um hash simples a partir da string
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  // Converte o hash para uma cor HSL com saturação e luminosidade fixas
  // para garantir cores agradáveis e legíveis
  const h = Math.abs(hash % 360)

  return {
    background: `hsl(${h}, 85%, 93%)`,
    text: `hsl(${h}, 85%, 30%)`,
    hover: `hsl(${h}, 85%, 90%)`,
  }
}

function ProductsList({ products }: { products: Product[] }) {
  // Memoize as cores para evitar recálculos desnecessários
  const productColors = useMemo(() => {
    const colors: Record<string, { background: string; text: string; hover: string }> = {}

    products.forEach((product) => {
      if (!colors[product.name]) {
        colors[product.name] = generateColorFromString(product.name)
      }
    })

    return colors
  }, [products])

  return (
    <div className="flex flex-wrap gap-1.5">
      {products.map((product, index) => {
        const color = productColors[product.name]

        return (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-colors"
                  style={{
                    backgroundColor: color.background,
                    color: color.text,
                  }}
                >
                  <Package className="h-3 w-3" />
                  <span>{product.name}</span>
                  <Badge
                    variant="outline"
                    className="ml-1 px-1.5 py-0 h-4 min-w-4 flex items-center justify-center rounded-full bg-white"
                  >
                    {product.quantity}
                  </Badge>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top">
                <div className="text-xs bg-white p-2 rounded-md shadow-md">
                  <p className="font-semibold">{product.name}</p>
                  <p>Quantidade: {product.quantity}</p>
                  <p>Preço unitário: R$ {product.value.toFixed(2)}</p>
                  <p>Subtotal: R$ {(product.value * product.quantity).toFixed(2)}</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      })}
    </div>
  )
}

export default ProductsList