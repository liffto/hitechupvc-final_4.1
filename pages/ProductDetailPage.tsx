import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { Product, SiteSettings } from '../types';
import { ChevronLeft } from 'lucide-react';
import { WhatsAppIcon } from '../components/IconRenderer';

interface ProductDetailPageProps {
  products: Product[];
  settings: SiteSettings;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ products, settings }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  // Reset active image when product changes to avoid indexing issues
  useEffect(() => {
    setActiveImage(0);
  }, [id]);

  if (!product) return <div className="p-20 text-center font-bold text-gray-500">Product not found</div>;

  const whatsappNumber = settings.whatsapp;
  const whatsappMessage = encodeURIComponent(`Hi, I am interested in ${product.name}. Please provide more details.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <Layout settings={settings}>
      <div className="bg-primary/5 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
          <Link to={`/category/${product.categoryId}`} className="p-2 bg-white rounded-lg shadow hover:bg-gray-100 transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-xl md:text-2xl font-bold text-black">{product.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Images Section */}
          <div className="space-y-4">
             <div className="bg-white border-2 border-gray-50 rounded-2xl overflow-hidden p-6 flex items-center justify-center h-[350px] md:h-[500px] shadow-sm relative group">
                <img 
                  key={activeImage} // Force re-render for animation effect
                  src={product.images[activeImage] || product.images[0]} 
                  alt={product.name} 
                  className="max-w-full max-h-full object-contain transition-all duration-500 animate-[fadeIn_0.5s_ease-out]" 
                />
             </div>
             {product.images.length > 1 && (
               <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                  {product.images.map((img, i) => (
                    <button 
                      key={i} 
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveImage(i);
                      }}
                      className={`aspect-square bg-white border-2 rounded-xl p-1.5 overflow-hidden flex items-center justify-center cursor-pointer transition-all ${activeImage === i ? 'border-primary ring-2 ring-primary/20' : 'border-gray-100 opacity-60 hover:opacity-100'}`}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img src={img} className="max-w-full max-h-full object-contain" alt="" />
                    </button>
                  ))}
               </div>
             )}
          </div>

          {/* Info Section */}
          <div className="flex flex-col">
             <div className="mb-6 md:mb-8 text-center md:text-left">
                <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">Premium Hardware</span>
                <h2 className="text-2xl md:text-3xl font-bold text-black mt-3 mb-4 leading-tight">{product.name}</h2>
                <div className="w-12 h-1 bg-primary rounded-full mx-auto md:mx-0"></div>
             </div>

             <a 
               href={whatsappUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-2.5 md:gap-3 bg-[#25D366] text-white py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#1da851] transition-all mb-8 shadow-lg shadow-green-500/20 active:scale-95"
             >
               <div className="bg-white/20 p-1.5 rounded-lg flex items-center justify-center">
                 <WhatsAppIcon size={20} />
               </div>
               WhatsApp Inquiry
             </a>

             <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold mb-4 text-black border-b border-gray-200 pb-2">Description</h3>
                <div className="prose prose-sm md:prose-base text-gray-700 leading-relaxed whitespace-pre-wrap font-medium">
                  {product.description || "No Description added"}
                </div>
             </div>

             <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                   <p className="text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-widest">Certification</p>
                   <p className="text-sm font-bold text-black uppercase">ISO 9001:2015</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                   <p className="text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-widest">Quality Grade</p>
                   <p className="text-sm font-bold text-black uppercase">Premium Quality</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;