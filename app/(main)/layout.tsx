import NavigationSidebar from '@/components/navigation/navigation-sidebar';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full z-30 flex-col fixed w-[72px] inset-y-0">
        <NavigationSidebar />
      </div>

      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
