import clsx from 'clsx';

export default function NotFoundPage() {
  return (
    <>
      <title>Página não encontrada!</title>
      <div
        className={clsx(
          'min-h-[320px]',
          'bg-slate-100',
          'text-slate-900',
          'mb-16',
          'p-8',
          'rounded-xl',
          'flex',
          'items-center',
          'justify-center',
          'text-center',
        )}
      >
        <div>
          <h1 className='text-7xl/tight mb-4 font-extrabold'>404</h1>
          <p>
            Erro 404 - A página que você está tentando acessar não existe nesse
            site
          </p>
        </div>
      </div>
    </>
  );
}
