export const Footer = () => {
  return (
    <footer className="mt-8 md:mt-12 w-full">
      <div className="container mx-auto py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Shashank. All rights reserved.</p>
      </div>
    </footer>
  );
};
