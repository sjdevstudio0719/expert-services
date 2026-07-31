import { Link } from 'react-router-dom';

const variants = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  ghostLight: 'btn-ghost-light',
};

export default function Button({ to, href, variant = 'primary', icon: Icon, children, className = '', ...props }) {
  const classes = `${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
        {Icon && <Icon className="h-4 w-4" />}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
        {Icon && <Icon className="h-4 w-4" />}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </button>
  );
}
