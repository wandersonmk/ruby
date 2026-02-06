# Como Atualizar os Posts do Instagram

## Passo a Passo

### 1. **Obter o código embed do Instagram**

1. Abra o Instagram no navegador (não funciona no app)
2. Vá até o post que deseja adicionar
3. Clique nos três pontos (...) no canto superior direito do post
4. Selecione "Incorporar" ou "Embed"
5. Copie TODO o código que aparece

### 2. **Formato do código**

O código copiado será algo assim:

```html
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CODIGO_DO_POST/" data-instgrm-version="14">
  <!-- conteúdo do post -->
</blockquote>
```

### 3. **Onde adicionar no código**

Abra o arquivo: `src/components/InstagramFeed.tsx`

Encontre a seção com os placeholders (procure por "Post 1", "Post 2", etc.)

Substitua o `<div>` do placeholder pelo código embed completo copiado do Instagram.

**ANTES:**
```tsx
<div className="bg-card rounded-lg shadow-card overflow-hidden border border-border/50 hover:shadow-lg transition-shadow">
  <div className="aspect-square bg-muted flex items-center justify-center">
    <div className="text-center p-6">
      <Instagram className="w-12 h-12 mx-auto mb-3 text-muted-foreground/30" />
      <p className="text-sm text-muted-foreground">
        Atualize com o link real do post
      </p>
    </div>
  </div>
</div>
```

**DEPOIS:**
```tsx
<blockquote 
  className="instagram-media" 
  data-instgrm-captioned 
  data-instgrm-permalink="https://www.instagram.com/p/SEU_POST_AQUI/"
  data-instgrm-version="14"
  style={{
    background: '#FFF',
    border: 0,
    borderRadius: '3px',
    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
    margin: '1px',
    maxWidth: '540px',
    minWidth: '326px',
    padding: 0,
    width: 'calc(100% - 2px)'
  }}
/>
```

### 4. **Exemplo Completo**

Vamos substituir o primeiro post como exemplo:

```tsx
// Procure por este trecho no arquivo InstagramFeed.tsx
{instagramPosts.map((postUrl, index) => (
  <motion.div key={index} ...>
    
    {/* Para o PRIMEIRO post (index === 0), substitua o placeholder por: */}
    {index === 0 ? (
      <blockquote 
        className="instagram-media" 
        data-instgrm-captioned 
        data-instgrm-permalink="https://www.instagram.com/p/CODIGO_DO_SEU_POST/"
        data-instgrm-version="14"
      />
    ) : (
      // Mantém o placeholder para os outros
      <div className="bg-card rounded-lg...">
        ...
      </div>
    )}
    
  </motion.div>
))}
```

### 5. **Dicas**

- ✅ Escolha posts com **conquistas** e **eventos importantes**
- ✅ Mantenha 6 posts na página (grid 2x3)
- ✅ Atualize semanalmente ou quando tiver posts relevantes
- ✅ Os posts são responsivos e funcionam em mobile

### 6. **Me envie quando precisar atualizar**

Quando quiser atualizar os posts, basta me enviar:
1. Os links dos posts que deseja adicionar
2. Quantos posts quer (recomendo 6)

Exemplo: "Adicionar estes posts: https://instagram.com/p/ABC123, https://instagram.com/p/DEF456"
