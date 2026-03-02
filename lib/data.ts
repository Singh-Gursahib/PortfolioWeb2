// ── Barrel re-export — import everything from '@/lib/data' ──
// Individual modules can also be imported directly for smaller bundles.

export { projects } from './projects';
export { research } from './research';
export {
    siteMetadata,
    navLinks,
    experiences,
    skillGroups,
    education,
    contactLinks,
    heroBadges,
} from './site';
